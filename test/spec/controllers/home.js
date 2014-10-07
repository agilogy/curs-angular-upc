'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('cursAngularUpcApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('hauria de tenir una data actual', function () {
    var baseTime = new Date();

    expect(scope.now.getTime()).toEqual(baseTime.getTime());
  });
});
