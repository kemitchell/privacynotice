var assert = require('assert')
var fs = require('fs')
var parseMarkup = require('commonform-markup-parse')
var parseTemplate = require('plaintemplate-parse')
var path = require('path')
var uniq = require('uniq')

var templating = require('../templating.json')

function bySerialization(a, b) {
  a = JSON.stringify(a)
  b = JSON.stringify(b)
  if (a < b) { return -1 }
  else if (a > b) { return 1 }
  else { return 0 } }

var form = path.join(__dirname, '..', 'notice.cform')
var markup = fs.readFileSync(form).toString()

var formBlanks = uniq(
  [ ]
    .concat(
      parseMarkup(markup)
      .directions
      .map(function(direction) { return direction.identifier }))
    .concat(templateVars(parseTemplate(markup, templating)))
    .sort(bySerialization))

function tagVar(tag) {
  return tag.substring(tag.indexOf(' ') + 1) }

function templateVars(content, vars) {
  if (vars === undefined) {
    vars = [ ] }
  return content.reduce(
    function(vars, token) {
      if ('text' in token) {
        return vars }
      else {
        var tag = token.tag
        vars.push(tagVar(tag))
        if ('content' in token) {
          templateVars(token.content, vars) }
        return vars } },
    vars) }

function flatten(result, element) {
  return result.concat(element) }

var inputs = require('../inputs')
  .map(function(section) {
    return section
      .inputs
      .map(function(input) { return input.identifier }) })
  .reduce(flatten, [ ])
  .sort(bySerialization)

assert.deepEqual(formBlanks, inputs)
