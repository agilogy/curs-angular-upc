'use strict';

angular.module('cursAngularUpcApp.recipes', [
	'ngRoute'
])

.config(function($routeProvider) {

	$routeProvider
		.when('/recipes', {
			templateUrl: 'views/recipes.html'
		})
		.when('/recipes/new', {
			templateUrl: 'views/recipe-form.html',
			controller: 'RecipeFormCtrl'
		});
})

.controller('RecipeFormCtrl', function($scope) {


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
	};

});