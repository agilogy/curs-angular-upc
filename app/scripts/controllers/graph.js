'use strict';

angular.module('cursAngularUpcApp.graph', [
	'nvd3',
	'cursAngularUpcApp.rest'
])

.config(function($routeProvider) {

	$routeProvider
		.when('/graph', {
			templateUrl: 'views/graph.html',
			controller: 'GraphCtrl'
		});

})

.filter('graphData', function(){
	return function(input){
		if (!input) {
			return [];
		}
		var result = [];
		console.log(input);
		// transform input data to plotable data (use $scope.data as example)
		return result;
	};
})

.controller('GraphCtrl', function(RestService, $scope, $filter) {

	var _getRecipes = function(){
		RestService.getAll()
		.then(function(response){
			$scope.recipes = response.data;
			$scope.mydata = $filter('graphData')($scope.recipes);
		});
	};

	_getRecipes();

	$scope.options = {
		chart: {
			type: 'pieChart',
			height: 500,
			showLabels: true,
			labelType: 'percent',
			labelThreshold: 0.01
		}
	};

	$scope.data = [{
		x: 'Un',
		y: 5
	}, {
		x: 'Dos',
		y: 4
	}, {
		x: 'Tres',
		y: 9
	}, {
		x: 'Quatre',
		y: 7
	}, {
		x: 'Cinc',
		y: 4
	}, {
		x: 'Sis',
		y: 3
	}, {
		x: 'Set o més',
		y: 1
	}];
});