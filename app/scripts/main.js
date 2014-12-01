/* globals angular */
'use strict';

require('angular');

var module_name = 'bdgtDummy';

var app = angular.module(module_name, []);

app.directive('bdgtDummy', require('./directives/DummyDir'));

angular.element(document).ready(function() {
  var root = document.getElementById('ng-wc-app-bdgt-dummy');
  if (root) {
    angular.bootstrap(root, [module_name], {strictDi: true});
  }
});

