var assert = require('assert')
var equal = require('deep-equal')
var fs = require('fs')
var parse = require('commonform-markup-parse')
var path = require('path')
var vars = require('mustache-vars')

function bySerialization(a, b) {
  a = JSON.stringify(a)
  b = JSON.stringify(b)
  if (a < b) { return -1 }
  else if (a > b) { return 1 }
  else { return 0 } }

var form = path.join(__dirname, '..', 'notice.cform')
var markup = fs.readFileSync(form).toString()

var formBlanks = parse(markup)
  .directions
  .map(function(direction) { return [ direction.identifier ] })
  .concat(
    vars(markup).map(function(variable) {
      return variable.split('\t') }))
  .sort(bySerialization)
  // If there are, say,
  // [ "Collects PII" ]
  // [ "Collects PII", "Combined Information" ]
  // [ "Collects PII", "Combined Information", "Description" ]
  // then filter out the first two.
  .filter(function(element, index, array) {
    return !array.some(function(otherElement) {
      return equal(element, otherElement.slice(0, -1)) }) })

var inputs = require('../inputs')
  .map(function(input) { return input.identifier })
  .sort(bySerialization)

assert.deepEqual(formBlanks, inputs)
