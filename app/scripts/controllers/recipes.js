'use strict';

angular.module('cursAngularUpcApp.recipes', [
	'ngRoute',
	'cursAngularUpcApp.rest',
	'cursAngularUpcApp.directives.cookingTime'
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
	})
	.when('/recipes/:recipeId/edit', {
		templateUrl: 'views/recipe-form.html',
		controller: 'RecipeEditCtrl'
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

.controller('RecipeEditCtrl', function($scope, $location, $routeParams, RestService) {

	RestService.getById($routeParams.recipeId)
		.then(function(response){
			$scope.formData = response.data;
		});

	$scope.send = function(){
		RestService.updateRecipe($scope.formData)
			.then(function(resp){
				if (resp.status === 200){
					$location.path('/recipes');
				}
			}, function(resp){
				console.error(resp);
			});
	};

	$scope.addIngredient = function(){
		$scope.formData.ingredients
			.push($scope.auxIngredient);

		$scope.auxIngredient = '';
	};

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
		RestService.addRecipe($scope.formData)
			.then(function(resp){
				if (resp.status === 200){
					$location.path('/recipes');
				}
			}, function(resp){
				console.error(resp);
			});
	};

});