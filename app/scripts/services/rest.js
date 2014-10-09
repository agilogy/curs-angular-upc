'use strict';

angular.module('cursAngularUpcApp.rest',[])

.service('RestService', function($http){

	var apiUrl = 'http://recipesapi.herokuapp.com:80/api';

	this.getAll = function(){
		return $http.get(apiUrl + '/recipes');
	};

	this.getById = function(recipeId){
		return $http.get(apiUrl + '/recipes/' + recipeId);
	};

	this.addRecipe = function(recipe){
		return $http.post(apiUrl + '/recipes', recipe);
	};

	this.updateRecipe = function(recipe){
		return $http.put(apiUrl + '/recipes/' + recipe.id, recipe);
	};

	this.deleteRecipe = function(recipeId){
		return $http.delete(apiUrl + '/recipes/' + recipeId);
	};
})

;