/* globals angular */
'use strict';

require('angular');

var module_name = 'mbcDummy';

var app = angular.module(module_name, []);

app.controller('DummyCtrl', ['$scope', require('./controllers/DummyCtrl')]);
app.directive('mbcDummy', require('./directives/DummyDir'));

angular.element(document).ready(function() {
  var root = document.getElementById('ng-wc-app-mbc-dummy');
  if (root) {
    angular.bootstrap(root, [module_name], {strictDi: true});
  }
});

