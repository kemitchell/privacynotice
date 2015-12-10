var assert = require('assert')
var tv4 = require('tv4')

var inputs = require('../terms')
var schema = require('../schemas/terms.json')

var result = tv4.validateMultiple(inputs, schema)
assert.deepEqual(result.errors, [ ])
