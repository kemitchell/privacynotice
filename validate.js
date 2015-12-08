var assert = require('assert')
var inputs = require('./inputs.json')
var schema = require('./schema.json')
var tv4 = require('tv4')

var result = tv4.validateMultiple(inputs, schema)
assert.deepEqual(result.errors, [ ])
