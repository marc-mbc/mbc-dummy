'use strict';
var sharedConfig = require('./karma-shared.conf');
module.exports = function(config) {
  var conf = sharedConfig(config);

  conf.files = conf.files.concat([
    //extra testing code
    'node_modules/angular-mocks/angular-mocks.js',

    //mocha stuff
    'tests/mocha.conf.js',

    //test files
    'tests/unit/**/*.js'
  ]);

  config.set(conf);
};
