foodyMainApp.factory("loginServices", ['$http', '$rootScope', '$location', function($http, $rootScope, $location){
	return {
        authenticateUser: function(user, scope) {
            //alert("welcome user:" +  user.username);
        	var authenticateUserProcess = $http.post(restUrlMain+loginService_verifyDetailsForLogin, user);
			
			authenticateUserProcess.success(function(responseData){
				user = responseData;
				// alert("Reponse data:" +  user.username);
				if(user.statusCode == "1"){
					// alert("Reponse data:" +  user.statusMessage);
					scope.$emit('loginSuccess'); 
				} else {
					if(user.errorBean.errorCode != "0"){
						// alert("Reponse data:" +  user.errorBean.errorMessage);
						scope.$emit('loginFailure'); 
					} else {
						alert("Response says no error");
					}
					
				}
			});
			authenticateUserProcess.error(function(responseData){
				alert("Reponse Error" + responseData);
			});
        }
    };
}]);