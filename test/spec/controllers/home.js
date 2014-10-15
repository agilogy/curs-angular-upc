'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('cursAngularUpcApp.home'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('hauria de tenir un nombre de sessió', function () {
    
    expect(scope.session).toBeGreaterThan(0);
  });
});
