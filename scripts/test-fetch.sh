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

# Distinguishing case: a real repository that genuinely has no package.json
# must report 3, never 1 and never 0. This is the code that makes an absence
# trustworthy, and conflating it with 1 would discard real findings.
check "complete tree, marker truly absent" 3 "titanwings/colleague-skill" "package.json"

# Truncation control: a one-second budget against a large repository forces the
# exact silent-partial failure that motivated this script. It must be caught.
sed 's/--max-time 180/--max-time 1/' "$fetch" > "$work/truncating.sh"
chmod +x "$work/truncating.sh"
"$work/truncating.sh" "ccch1mneyyy/dsh-TUI" "$work/trunc" "package.json" >/dev/null 2>&1
truncated=$?
if [ "$truncated" -eq 1 ]; then
  echo "  PASS  truncated transfer: exit 1"
else
  echo "  FAIL  truncated transfer: expected 1, got ${truncated}"
  failed=$((failed + 1))
fi
if [ -d "$work/trunc" ]; then
  echo "  FAIL  truncated transfer left a partial tree behind"
  failed=$((failed + 1))
else
  echo "  PASS  truncated transfer left no partial tree"
fi

# Which defence actually rejects a bad transfer — measured, not assumed.
#
# Removing `pipefail`, and separately removing `--fail`, both left this suite
# green. Investigating that rather than deleting the controls produced the real
# mechanism: on this platform `tar` exits non-zero on any input it cannot parse
# as a complete archive, including a 404 body ("Unrecognized archive format")
# and a mid-stream cut-off. So tar is the load-bearing defence; `--fail` and
# `pipefail` only make the failure earlier and the message accurate.
#
# These two greps are therefore recorded as configuration assertions, not as
# behavioural proof. Claiming otherwise would credit them with tar's work — and
# a control that cannot fail is not evidence.
# Matched against the executable line, not anywhere in the file: an earlier
# version of this control grepped the whole script and stayed green when
# `--fail` was removed from the command, because the surrounding comment still
# mentioned it. A control satisfied by its own documentation proves nothing.
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

# Assert the mechanism that actually rejects a truncated stream.
#
# Measured correction: on this platform `tar` exits non-zero by itself when its
# input ends mid-archive, so tar's status — not `pipefail` — is what catches a
# cut-off transfer. Every attempt to construct a truncation that tar accepts
# while curl fails was unsuccessful. `pipefail` is retained as defence in depth
# for the case where tar does accept a short stream (a cut falling exactly on a
# member boundary, or a different tar implementation), but it must not be
# credited with work tar is doing.
#
# What this control therefore asserts is the property the fetcher depends on:
# a truncated stream must not yield a zero exit with an empty tree.
probe="$work/truncation-probe"
mkdir -p "$probe/out"
url="https://codeload.github.com/HsiangNianian/dsh-auto-continue/tar.gz/HEAD"

truncation_status=0
( set -euo pipefail
  curl -sSL --fail "$url" | head -c 3000 | tar xz -C "$probe/out" --strip-components=1 2>/dev/null
) >/dev/null 2>&1 || truncation_status=$?
extracted=$(find "$probe/out" -type f | wc -l | tr -d ' ')

if [ "$truncation_status" -ne 0 ]; then
  echo "  PASS  truncated stream is rejected (exit ${truncation_status}, ${extracted} files extracted)"
elif [ "$extracted" -eq 0 ]; then
  echo "  FAIL  truncated stream exited 0 with an empty tree: a fetch failure would"
  echo "        be indistinguishable from a repository with no manifest"
  failed=$((failed + 1))
else
  echo "  FAIL  truncated stream exited 0 with ${extracted} partial files"
  failed=$((failed + 1))
fi

# Platform assumption check. The whole fetcher rests on tar rejecting a
# non-archive, so that property is asserted directly instead of trusted. If a
# future runner ships a tar that accepts a 404 body, this fires and the fetcher
# needs `--fail` promoted from defence-in-depth to load-bearing.
notarchive="$work/notarchive"
mkdir -p "$notarchive"
printf '404: Not Found' | tar xz -C "$notarchive" --strip-components=1 2>/dev/null
notarchive_status=$?
if [ "$notarchive_status" -ne 0 ]; then
  echo "  PASS  tar rejects a non-archive body (exit ${notarchive_status})"
else
  echo "  FAIL  tar accepted a non-archive body; --fail is now load-bearing and"
  echo "        the fetcher must not rely on tar to reject error responses"
  failed=$((failed + 1))
fi

if [ "$failed" -eq 0 ]; then
  echo "all fetch controls behaved as specified"
  exit 0
fi
echo "${failed} fetch control(s) did not behave as specified"
exit 1
