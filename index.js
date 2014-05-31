'use strict';
var map = require('map-stream');
var es = require('event-stream');
 
module.exports = function() {
  return es.map(function (file, cb) {
    var search = /console.((log|debug|info|warn|error|assert|dir|dirxml|trace|group|groupEnd|time|timeEnd|profile|profileEnd|count)(.*);?)(.*);i?/g;
    file.contents = new Buffer(file.contents.toString().replace(search,''));
    cb(null,file);
  });
};
