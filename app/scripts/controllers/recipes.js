'use strict';

angular.module('cursAngularUpcApp.recipes', [
	'ngRoute',
	'cursAngularUpcApp.rest'
])

.config(function($routeProvider) {

	$routeProvider
	.when('/recipes', {
		templateUrl: 'views/recipes.html',
		controller: 'RecipesCtrl'
	})
	.when('/recipes/new', {
		templateUrl: 'views/recipe-form.html',
		controller: 'RecipeFormCtrl'
	});
})

.controller('RecipesCtrl', function($scope, RestService) {

	var _getRecipes = function(){
		RestService.getAll()
		.then(function(response){
			$scope.recipes = response.data;
		});
	};

	$scope.deleteRecipe = function(rId){
		RestService.deleteRecipe(rId)
			.then(_getRecipes, function(errorResp){
				console.error(errorResp);
			});		
	};

	_getRecipes();
})

.controller('RecipeFormCtrl', function($scope, $location, RestService) {


	$scope.formData = {
		ingredients: []
	};

	$scope.addIngredient = function(){
		$scope.formData.ingredients
			.push($scope.auxIngredient);

		$scope.auxIngredient = '';
	};

	$scope.send = function(){
		console.log($scope.formData);
		RestService.addRecipe($scope.formData)
			.then(function(resp){
				if (resp.status === 200)
					$location.path('/recipes');
			}, function(resp){
				console.error(resp);
			});
	};

});