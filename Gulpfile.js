'use strict';
var wc_name = require('path').basename(__dirname);
var tools = require('./component_build.js')({
  wc_name: wc_name,
  root: __dirname,
  main_root: __dirname
});

// install bower deps on public
tools.gulp.task('bower_' + wc_name, [], function () {
  tools.gulp.src(__dirname + '/bower_components/jquery/jquery.min.js')
    .pipe(tools.gulp.dest(__dirname + '/public/vendor/'));
  return tools.gulp.src(__dirname + '/bower_components/jquery/jquery.js')
    .pipe(tools.gulp.dest(__dirname + '/public/vendor/'));
});

tools.gulp.task('default', ['bower_' + wc_name, 'watch_' + wc_name].concat(Object.keys(tools.all_dependences)), function () {
  tools.connect().use(tools.serveStatic(__dirname + '/public')).listen(8080);
});
