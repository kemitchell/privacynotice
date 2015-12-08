var tv4 = require('tv4')
var inputs = require('./inputs.json')
var schema = require('./schema.json')
var result = tv4.validateMultiple(inputs, schema)

if (result.valid) {
  process.exit(0) }
else {
  result.errors.forEach(function(error) {
    console.error(error) })
  process.exit(1) }
