foodyMainApp.factory("createRestaurantLoginServices", ['$http', '$rootscope' function ($http, $rootscope){
	return {
        createRestaurantLogin: function(restaurantLoginDetails, scope) {
            //alert("welcome user:" +  user.username);
        	var createRestaurantLoginProcess = $http.post(restUrlMain+createRestaurantLoginService_create, restaurantLoginDetails);
			
			createRestaurantLoginProcess.success(function(responseData){
				statusBean = responseData;
				// alert("Reponse data:" +  user.username);
				if(statusBean.statusCode == "1"){
					// alert("Reponse data:" +  user.statusMessage);
					scope.$emit('createRestaurantLoginSuccess'); 
				} else {
					if(statusBean.errorBean.errorCode != "0"){
						scope.$emit('createRestaurantLoginFailure'); 
						alert("Reponse data:" +  statusBean.errorBean.errorMessage);
					} else {
						alert("Response says no error");
					}
					
				}
			});
			createRestaurantLoginProcess.error(function(responseData){
				alert("createRestaurantLoginProcess Reponse Error" + responseData);
			});
        }
    };
}]);