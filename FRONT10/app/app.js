var myApp = angular.module('myFlayApp', []);

// flights controller
myApp.controller('flightCtrl', function($scope) {
	$scope.flights = ['Round-trip', 'One-way', 'Multi-city'];
	$scope.passengers = ['Adults', 'Seniors', 'Youth', 'Child', 'Seat Infant', 'Lap Infant'];
	$scope.travels = ['Economy', 'Premium Economy', 'Business', 'First', 'Multiple'];
	
	$scope.switchFromTo = function() {
		// switch file Form whit file To
		var tem = $scope.fly.from;
		$scope.fly.from = $scope.fly.to;
		$scope.fly.to = tem;
	};
		
	$scope.searchFly = function() {
		// search any fly
	};
});