'use strict';

var DummyDir = function() {
  return {
    restrict: 'E',
    templateUrl: '/assets/views/web_component_dist/mbc-dummy/dummy.html',
    scope: {}, 
    controller: 'DummyCtrl'
  };
};

module.exports = DummyDir;