'use strict';

angular.module('cursAngularUpcApp.recipes', [
	'ngRoute'
])

.config(function($routeProvider) {

	$routeProvider
		.when('/recipes', {
			templateUrl: 'views/recipes.html',
			controller: 'RecipesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})

.controller('RecipesCtrl', function($scope) {


	$scope.formData = {
		ingredients: []
	};

	$scope.addIngredient = function(){
		$scope.formData.ingredients
			.push($scope.auxIngredient);

		$scope.auxIngredient = '';
	}

	$scope.send = function(){
		console.log($scope.formData);
	};

});