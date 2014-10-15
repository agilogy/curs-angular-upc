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
        var result = [{
                x: 'Cap',
                y: 0
            }, {
                x: 'Un',
                y: 0
            }, {
                x: 'Dos',
                y: 0
            }, {
                x: 'Tres',
                y: 0
            }, {
                x: 'Quatre',
                y: 0
            }, {
                x: 'Cinc',
                y: 0
            }, {
                x: 'Sis',
                y: 0
            }, {
                x: 'Set o més',
                y: 0
            }];

        angular.forEach(input, function(value){
            var numIngredients = 0;
            if (value.ingredients.length >= 7) {
                numIngredients = 7;
            } else { 
                numIngredients = value.ingredients.length;
            }
            result[value.ingredients.length].y++;
        });
        
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