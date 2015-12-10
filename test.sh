#!/bin/sh
set -e # Fail on error.
set -v # Print commands to stderr as executed.
node test/validate-inputs.js && echo "Inputs validate"
node test/validate-terms.js && echo "Terms validate"
node test/compare-blanks-and-inputs.js && echo "Inputs match template"
! cat terms.json | aspell --dont-backup list --personal=./whitelist.en.pws | grep "^" && echo "No spelling errors"
