#!/bin/sh
set -e
node test/validate-inputs.js
node test/compare-blanks-and-inputs.js
! cat *.cform | aspell --dont-backup list --personal=./whitelist.en.pws | grep "^"
