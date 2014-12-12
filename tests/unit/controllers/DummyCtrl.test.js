/* globals angular, describe, it, beforeEach, expect */
'use strict';

describe('Unit: Testing Controllers', function() {
  var controllerFactory, scope;

  function createController() {
    return controllerFactory('DummyCtrl', {
      $scope: scope
    });
  }

  beforeEach(angular.mock.module('bdgtDummy'));
  beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_) {
    scope = _$rootScope_.$new();
    controllerFactory = _$controller_;
  }));

  it('should have a DummyCtrl controller', function() {
    createController();
    expect(scope.hello_world).to.be.equal('Dummy: Hello world!');
  });


});
