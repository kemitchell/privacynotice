var assert = require('assert')
var booleanVariables = require('boolean-json-variables')

var terms = require('../terms')

function recurseTerms(formish, variables) {
  return formish.content.reduce(
    function(variables, element) {
      if (typeof element === 'object') {
        if ('insert' in element) {
          variables.push(element.insert) }
        if ('condition' in element) {
          booleanVariables(element.condition).forEach(function(variable) {
            variables.push(variable) }) }
        if ('form' in element) {
          recurseTerms(element.form, variables) } }
      return variables },
    variables)  }

var inTerms = recurseTerms(terms, [ ]).sort().reduce(unique, [ ])

function unique(result, element) {
  return ( result.indexOf(element) > -1 ? result : result.concat(element) ) }

function flatten(result, element) {
  return result.concat(element) }

var inputs = require('../inputs')
  .map(function(section) {
    return section
      .inputs
      .map(function(input) { return input.identifier }) })
  .reduce(flatten, [ ])
  .sort()

assert.deepEqual(inTerms, inputs)
