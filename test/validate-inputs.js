var assert = require('assert')
var tv4 = require('tv4')

var inputs = require('../inputs.json')
var schema = require('../schema.json')

var result = tv4.validateMultiple(inputs, schema)
assert.deepEqual(result.errors, [ ])
