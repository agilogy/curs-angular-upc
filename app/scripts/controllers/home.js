'use strict';

angular.module('cursAngularUpcApp.home',[])

.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})

.run(function(){
	console.log('cursAngularUpcApp.home loaded....');
})

.controller('MainCtrl', function() {

})

;