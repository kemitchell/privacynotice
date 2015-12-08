#!/bin/sh
set -e
node validate.js
node checkinputs.js
cat *.cform | aspell --dont-backup list --personal=./whitelist.en.pws | grep "^"
