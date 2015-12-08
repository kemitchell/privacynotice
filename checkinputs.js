var assert = require('assert')
var fs = require('fs')
var parse = require('commonform-markup-parse')

var markup = fs.readFileSync('./notice.cform').toString()
var formBlanks = parse(markup)
  .directions
  .map(function(direction) { return direction.identifier })
  .sort()
var inputs = require('./inputs')
  .map(function(input) { return input.identifier })
  .sort()

assert.deepEqual(formBlanks, inputs)
