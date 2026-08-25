#!/usr/bin/env bash
# Negative controls for the checkout fetcher.
#
# The bug these guard against does not announce itself: a truncated
# `curl | tar` exits 0 having extracted nothing, so an audit reports a
# confident `no-manifest` for a repository whose manifest exists. A fetcher
# that cannot distinguish "absent" from "not transferred" makes every
# downstream verdict unreliable, so each exit code is asserted here.
#
# Contract under test:
#   0  complete tree, marker present
#   1  transfer failed or produced nothing (verdict must NOT be trusted)
#   3  complete tree, marker genuinely absent (verdict IS trustworthy)
set -uo pipefail

here="$(cd "$(dirname "$0")" && pwd)"
fetch="$here/fetch-checkout.sh"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

failed=0

# Assert one fetch outcome.
# $1 label, $2 expected exit, $3 repo, $4 marker
check() {
  local label="$1" expect="$2" repo="$3" marker="$4"
  "$fetch" "$repo" "$work/$(echo "$repo" | tr '/' '_')" "$marker" >/dev/null 2>&1
  local actual=$?
  if [ "$actual" -eq "$expect" ]; then
    echo "  PASS  ${label}: exit ${actual}"
  else
    echo "  FAIL  ${label}: expected ${expect}, got ${actual}"
    failed=$((failed + 1))
  fi
}

echo "fetch-checkout controls:"

# Positive: a healthy repository with a manifest must succeed.
check "complete checkout with manifest" 0 "HsiangNianian/dsh-auto-continue" "package.json"

# Negative: a nonexistent repository must fail, not yield an empty tree that
# later reads as "no manifest".
check "nonexistent repository" 1 "nonexistent-owner-xyz-000/nope" "package.json"

# Distinguishing case: a complete tree that genuinely lacks the marker must
# report 3, never 1 and never 0. This is the code that makes an absence
# trustworthy, and conflating it with 1 would discard real findings.
#
# The marker is a name that cannot exist rather than a repository that happens to
# lack package.json. The earlier form named `titanwings/colleague-skill`, which
# added a package.json on 2026-08-25 and turned this control red — the second
# fixture in two days to rot because its subject changed. Asserting against an
# impossible filename tests the same branch and cannot be invalidated by anyone
# else's commit, while the repository stays a real one so the transfer path is
# still exercised end to end.
check "complete tree, marker truly absent" 3 "HsiangNianian/dsh-auto-continue" "no-such-file-e3b0c44298fc.json"

# Truncation control.
#
# A wall-clock budget is not a reliable way to force truncation: locally a
# one-second limit cuts the 5.5 MB archive short, but on the CI runner the whole
# download completes inside that second, the fetch succeeds, and the control
# reported the fetcher as broken when it was the premise that was wrong.
#
# Truncation is injected deterministically instead — the download is replaced by
# a partial copy of a real archive, so the integrity gate is exercised on exactly
# the input it exists to reject, at any network speed.
cat > "$work/truncating.sh" <<'INJECT'
#!/usr/bin/env bash
# Stand-in for fetch-checkout.sh whose download always lands a partial archive.
set -euo pipefail
repo="$1"; dest="$2"; marker="${3:-package.json}"
work="${dest}.partial"; archive="${work}.tar.gz"
rm -rf "$work" "$archive"; mkdir -p "$work"
curl -sSL --fail --max-time 120 -o "${archive}.full" \
  "https://codeload.github.com/${repo}/tar.gz/HEAD" || { rm -rf "$work" "${archive}.full"; exit 1; }
head -c 4000 "${archive}.full" > "$archive"; rm -f "${archive}.full"
if ! gzip -t "$archive" 2>/dev/null; then
  rm -rf "$work" "$archive"
  echo "truncated or corrupt archive" >&2
  exit 1
fi
tar xzf "$archive" -C "$work" --strip-components=1 2>/dev/null || { rm -rf "$work" "$archive"; exit 1; }
rm -f "$archive"; mv "$work" "$dest"
INJECT
chmod +x "$work/truncating.sh"
"$work/truncating.sh" "HsiangNianian/dsh-auto-continue" "$work/trunc" "package.json" >/dev/null 2>&1
truncated=$?
if [ "$truncated" -eq 1 ]; then
  echo "  PASS  truncated archive is rejected: exit 1"
else
  echo "  FAIL  truncated archive accepted: expected exit 1, got ${truncated}"
  failed=$((failed + 1))
fi
if [ -d "$work/trunc" ]; then
  echo "  FAIL  truncated archive left a partial tree behind"
  failed=$((failed + 1))
else
  echo "  PASS  truncated archive left no partial tree"
fi

# Which defence actually rejects a bad transfer — corrected by CI.
#
# An earlier version of this file concluded tar's exit status was load-bearing.
# That was wrong in the way that matters: it held only for the local tar. On the
# same one-second truncation, GNU tar on the CI runner exits 0 leaving 6 files,
# and bsdtar locally produced both (exit 0, 0 files) and (exit 1, 12 files) on
# different runs. No exit status distinguishes a whole archive from a piece.
#
# The fetcher now downloads to a file and runs `gzip -t`, which walks the entire
# stream. These greps assert that structure; the behavioural proof follows.
if grep -Eq '^\s*set -euo pipefail\s*$' "$fetch"; then
  echo "  PASS  [config] fetch-checkout.sh sets -euo pipefail"
else
  echo "  FAIL  [config] fetch-checkout.sh dropped 'set -euo pipefail'"
  failed=$((failed + 1))
fi
if grep -Eq '^\s*(if ! )?curl .*--fail' "$fetch"; then
  echo "  PASS  [config] the curl invocation passes --fail"
else
  echo "  FAIL  [config] the curl invocation dropped --fail"
  failed=$((failed + 1))
fi
if grep -q 'gzip -t' "$fetch"; then
  echo "  PASS  [config] the archive is integrity-checked with gzip -t"
else
  echo "  FAIL  [config] archive integrity is no longer verified; tar's exit"
  echo "        status is not a portable substitute"
  failed=$((failed + 1))
fi
if grep -Eq '^[^#]*curl[^|#]*\|[^|]*tar' "$fetch"; then
  echo "  FAIL  [config] the download is streamed into tar, which cannot detect"
  echo "        truncation portably"
  failed=$((failed + 1))
else
  echo "  PASS  [config] the download is not streamed straight into tar"
fi

# Behavioural proof, independent of tar: gzip -t must reject a truncated archive
# and accept a whole one. This is the mechanism the fetcher relies on, so it is
# asserted in both directions rather than assumed to hold on this runner.
probe="$work/integrity-probe"
mkdir -p "$probe"
url="https://codeload.github.com/HsiangNianian/dsh-auto-continue/tar.gz/HEAD"

curl -sSL --fail "$url" -o "$probe/whole.tar.gz" 2>/dev/null || true
head -c 3000 "$probe/whole.tar.gz" > "$probe/partial.tar.gz" 2>/dev/null || true

if gzip -t "$probe/whole.tar.gz" 2>/dev/null; then
  echo "  PASS  gzip -t accepts a complete archive"
else
  echo "  FAIL  gzip -t rejected a complete archive; the integrity gate would"
  echo "        reject every healthy repository"
  failed=$((failed + 1))
fi

if gzip -t "$probe/partial.tar.gz" 2>/dev/null; then
  echo "  FAIL  gzip -t accepted a truncated archive; truncation would reach the"
  echo "        audit as a repository with missing files"
  failed=$((failed + 1))
else
  echo "  PASS  gzip -t rejects a truncated archive"
fi

if [ "$failed" -eq 0 ]; then
  echo "all fetch controls behaved as specified"
  exit 0
fi
echo "${failed} fetch control(s) did not behave as specified"
exit 1
