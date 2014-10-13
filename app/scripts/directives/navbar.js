'use strict';

angular.module('cursAngularUpcApp.directives.navbar', [])
.directive('myNavbar', function($location){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/scripts/directives/navbar.tmp.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
			$scope.$watch(function(){
				return $location.path();
			}, function(newValue, oldValue){
				var liElements = iElm[0].querySelectorAll('li');

				angular.forEach(liElements, function(li){
					var liElement = angular.element(li);
					var href = angular.element(liElement.children()[0]).attr('ng-href');
					var sHref = href.substring(1);
					if (sHref == newValue){
						liElement.addClass('active');
					} else {
						liElement.removeClass('active');
					}
				});
				console.log(newValue);
			});
		}
	};
});