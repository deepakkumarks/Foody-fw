foodyMainApp.controller('loginController', ['$rootScope', '$scope', '$location', 'loginServices', function($rootScope, $scope, $location, loginServices){
	$scope.heading = "Admin Login Page";
	$scope.isInvalidUser = false;
	$scope.user={};
	$rootScope.showUserWelcome = false;
	$rootScope.username = "";

	$scope.loginSubmit = function(){
		$scope.user.username = $scope.data.username;
		$scope.user.password = $scope.data.password;
		$scope.user.pin = $scope.data.pin;
		//$scope.user.userType = "admin";
		// loginServices.addItems();
		loginServices.authenticateUser($scope.user, $scope);
		$rootScope.username = $scope.user.username;
		$rootScope.loggedInDateTime = new Date();
	}



	$scope.loginReset = function(){
			$scope.data.username  = $scope.data.password =  $scope.data.pin = "";
	}

	$scope.$on('loginSuccess', function(event){
		$rootScope.showUserWelcome = true;
		$location.path('/dashboard');
	});

	$scope.$on('loginFailure',function(event){
		$scope.inValidUserMsg="Incorrect User id or Password or PIN supplied.";
		$scope.isInvalidUser = true;
		$rootScope.showUserWelcome = false;
		$scope.admin_username="";
		$scope.loginReset();
	});

}]);


