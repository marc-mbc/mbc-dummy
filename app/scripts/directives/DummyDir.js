'use strict';

var DummyDir = function() {
  return {
    restrict: 'E',
    templateUrl: '/assets/views/wc_dist/bdgt-dummy/dummy.html',
    scope: {}, 
    controller: ['$scope', require('../controllers/DummyCtrl')]
  };
};

module.exports = DummyDir;