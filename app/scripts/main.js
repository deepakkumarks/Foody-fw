// jshint devel:true
var foody = angular.module('foody', ['ngResource']);

foody.controller('mainCntrl', ['$scope', function($scope){
	$scope.heading = "Login";
	$scope.login = $scope.form = {};

	$scope.checkValidation = function(){
		$scope.reset();
		if($scope.form.email == "admin" && $scope.form.pwd == "admin"){
			$scope.login.success =true;
		}else {
			$scope.login.failed =true;
		}
	}

	$scope.reset = function(){
			$scope.login.success  = $scope.login.failed =false;
	}
}]);