'use strict';

describe('Controller: RecipesCtrl', function () {

  // load the controller's module
  beforeEach(module('cursAngularUpcApp.recipes'));

  var RecipesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipesCtrl = $controller('RecipesCtrl', {
      $scope: scope
    });
  }));

  it('la cerca de receptes ha de cercar per titol', function () {
    
    var item1 = {title:'macarrons'};
    var item2 = {title: 'Canalons'};

    scope.query = 'Macarrons';

    expect(scope.search(item1)).toBe(true);
    expect(scope.search(item2)).toBe(false);


  });
});