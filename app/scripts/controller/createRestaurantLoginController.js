foodyMainApp.controller('createRestaurantLoginController', ['$scope', '$location', 'restaurantServices', function($scope, $location, restaurantServices){
	$scope.heading = "Create Resturant Login";
	$scope.restaurant={};

	
	$scope.createRestaurantLogin = function(){
		$scope.restaurant.restaurantEmailId = $scope.data.restaurantEmailId;
		$scope.restaurant.restaurantPassword = $scope.data.restaurantPassword;
		restaurantServices.createRestaurantLogin($scope.restaurant, $scope);
	}

	$scope.$on('createRestaurantLoginSuccess', function(event){
		alert("New Restaurant Login Created Successfully!!!");
	});

	$scope.$on('createRestaurantLoginFailure', function(event){
		alert("New Restaurant Login Created Failed!!!");
	});
}]);

