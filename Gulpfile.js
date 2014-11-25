'use strict';

var wc_name = require('path').basename(__dirname);
var tools = require('bdgt-web-component-builder')({
  name: wc_name,
  root: '../../public/assets',
  subfolder: 'web_component_dist/' + wc_name
});
tools.gulp.task('default', ['watch']);
