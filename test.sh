#!/bin/sh
set -e
node validate.js
cat *.cform | aspell --dont-backup list --personal=./whitelist.en.pws | grep "^"
