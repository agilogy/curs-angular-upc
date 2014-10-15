/*jshint unused:false*/
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

.directive('ingredientList', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			ingredients: '='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		//require: 'ng-model', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/views/ingredient-list.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			$scope.addIngredient = function(){
				$scope.ingredients
					.push($scope.auxIngredient);

				$scope.auxIngredient = '';
			};
		}
	};
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

	$scope.dataActual = new Date();

	$scope.search = function(item){
		if (!$scope.query){
			return true;
		}
		
		return item.title.toLowerCase().indexOf($scope.query.toLowerCase())===0;
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