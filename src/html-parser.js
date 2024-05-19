/*
 * Set up window for Node.js
 */

var root = (typeof window !== 'undefined' ? window : {})

/*
 * Parsing HTML strings
 */

function createHTMLParser () {
  var Parser = function () {}
  var jsdom = require('jsdom-jscore-rn')
  Parser.prototype.parseFromString = function (string) {
    return jsdom.html(string)
  }
  return Parser
}

export default createHTMLParser()
