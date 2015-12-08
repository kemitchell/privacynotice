#!/bin/sh
set -e # Fail on error.
set -v # Print commands to stderr as executed.
node test/validate-inputs.js
node test/compare-blanks-and-inputs.js
! cat *.cform | aspell --dont-backup list --personal=./whitelist.en.pws | grep "^"
