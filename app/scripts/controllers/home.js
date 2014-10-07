'use strict';

angular.module('cursAngularUpcApp.home',[])

.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})

.controller('HomeCtrl', function($scope) {

	$scope.now = new Date();
})

;