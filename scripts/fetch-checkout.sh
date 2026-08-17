#!/usr/bin/env bash
# Fetch one repository checkout for auditing, or fail loudly.
#
# A truncated download is the dangerous failure here, not a missing one.
# Measured: `curl ... | tar xz` exits 0 after extracting ZERO files when the
# transfer is cut off, so an audit run over hundreds of repositories silently
# turns every throttled fetch into a confident `no-manifest` error. One such
# fetch during development reported 15 of 35 files and produced a false
# `no-manifest` for a repository whose package.json exists at 2385 bytes.
#
# Three defences, because the first alone is not enough:
#   1. `pipefail` so curl's failure is not masked by tar's success.
#   2. `--fail` so an HTTP error body is never fed to tar as if it were data.
#   3. A post-extraction assertion that the tree is non-empty AND carries the
#      marker file the caller requires.
#
# Usage: fetch-checkout.sh <owner/name> <dest-dir> [required-marker]
# Exits non-zero on any incomplete fetch. Never leaves a partial tree behind.
set -euo pipefail

repo="${1:?usage: fetch-checkout.sh <owner/name> <dest-dir> [required-marker]}"
dest="${2:?missing dest-dir}"
marker="${3:-package.json}"

work="${dest}.partial"
rm -rf "$work" "$dest"
mkdir -p "$work"

# Download to a file first, then extract. Streaming `curl | tar` cannot be made
# reliable across platforms: measured on a one-second truncation, GNU tar on the
# CI runner exits 0 and leaves 6 files behind, while bsdtar locally exits 0 with
# 0 files in one run and 1 with 12 files in another. Neither the pipeline's exit
# status nor tar's own status distinguishes a complete archive from a partial
# one, so a partial tree reaches the audit and every missing file reads as a
# repository defect.
#
# Separating the steps makes completeness checkable: curl alone reports transfer
# failure, and gzip verifies the archive is whole before anything is extracted.
archive="${work}.tar.gz"
rm -f "$archive"

if ! curl -sSL --fail --retry 3 --retry-delay 2 --max-time 180 \
    -o "$archive" "https://codeload.github.com/${repo}/tar.gz/HEAD"; then
  rm -rf "$work" "$archive"
  echo "fetch-checkout: transfer failed for ${repo}" >&2
  exit 1
fi

# Integrity gate: gzip -t walks the whole stream and fails on truncation. This
# is the check that actually catches a short download, independent of tar.
if ! gzip -t "$archive" 2>/dev/null; then
  rm -rf "$work" "$archive"
  echo "fetch-checkout: truncated or corrupt archive for ${repo}" >&2
  exit 1
fi

if ! tar xzf "$archive" -C "$work" --strip-components=1 2>/dev/null; then
  rm -rf "$work" "$archive"
  echo "fetch-checkout: could not extract ${repo}" >&2
  exit 1
fi
rm -f "$archive"

file_count=$(find "$work" -type f | wc -l | tr -d ' ')
if [ "$file_count" -eq 0 ]; then
  rm -rf "$work"
  echo "fetch-checkout: ${repo} extracted zero files" >&2
  exit 1
fi

# The marker assertion is what distinguishes "this repository genuinely has no
# package.json" from "the transfer stopped before reaching it". Only the caller
# knows which markers matter, so it is required rather than assumed.
if [ "$marker" != "-" ] && [ ! -e "$work/$marker" ]; then
  # Absence is only trustworthy when the tree is otherwise complete, so this is
  # reported distinctly and left for the caller to interpret.
  echo "fetch-checkout: ${repo} has no ${marker} (tree has ${file_count} files)" >&2
  mv "$work" "$dest"
  exit 3
fi

mv "$work" "$dest"
echo "${repo}: ${file_count} files" >&2
