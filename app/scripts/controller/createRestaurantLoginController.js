foodyMainApp.controller('createRestaurantLoginController', ['$scope', '$location', function($scope, $location){
	$scope.heading = "Create Resturant Login";
	$scope.restaurant.restaurantEmailId = $scope.data.restaurantEmailId;
	$scope.restaurant.restaurantPassword = $scope.data.restaurantPassword;
	
	$scope.createRestaurantLogin = function(){
		createRestaurantLoginServices.createRestaurantLogin($scope.restaurant, $scope);
	}

}]);

$scope.on('createRestaurantLoginSuccess', function(event){
	alert("New Restaurant Login Created Successfully!!!");
});