'use strict';
var wc_name = require('path').basename(__dirname);
var tools = require('./component_build.js')({
  wc_name: wc_name,
  root: __dirname,
  main_root: __dirname
});

tools.gulp.task('default', ['watch_' + wc_name].concat(Object.keys(tools.all_dependences)), function () {
  tools.connect().use(tools.serveStatic(__dirname + '/public')).listen(8080);
});
