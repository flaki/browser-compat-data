var fs = require('fs'),
    path = require('path'),
    extend = require('extend');

function load() {
  // Recursively load one or more directories passed as arguments.
  var dir, result = {};

  function processFilename(fn) {
    let fp = path.join(dir, fn);
    let extra;

    // If the given filename is a directory, recursively load it.
    if (fs.statSync(fp).isDirectory()) {
      extra = load(fp);
    } else if (path.extname(fp) === '.json') {
      extra = require(fp);
    }

    // The JSON data is independent of the actual file
    // hierarchy, so it is essential to extend "deeply".
    result = extend(true, result, extra);
  }

  for (dir of arguments) {
    dir = path.resolve(__dirname, dir);
    fs.readdirSync(dir).forEach(processFilename);
  }

  return result;
}

module.exports = load(
  'api',
  'browsers',
  'css',
  'html',
  'http',
  'javascript',
  'svg',
  'webextensions'
);
module.exports.render = require('./render.js');
module.exports.renderers = require('./renderers/index.js');
