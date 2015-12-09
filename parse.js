var parse = require('plaintemplate-parse')
var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString()
var parsed = parse(input, require('./templating.json')
console.log('%j', parsed)
