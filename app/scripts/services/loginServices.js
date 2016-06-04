foodyMainApp.factory("loginServices", ['$http', '$rootScope', '$location', function($http, $rootScope, $location){
	return {
        authenticateUser: function(user, scope) {
            alert("welcome user:" +  user.username);
            if(user.username == 'admin'){
            	var loginUser= $http.get("http://localhost:8080/RESTfulExample/rest/hello/ufff");
				loginUser.then(function(msg){	
					var userID = msg.data;			
					alert("return data:" + userID);
					alert("return data:" + loginUser);
					alert("return data:" + msg);
					alert("return data:" + sg.data);

				});
				scope.$emit('loginSuccess'); 
			}else{
				scope.$emit('loginFailure'); 
			}
        }

    };


	// return{
	// 	authenticateUser:function(user, scope){
	// 		var loginUser= $http.post("php/api/getUsers.php?method=validateUser&jsoncallback=", user);
	// 		loginUser.then(function(msg){	
	// 			var userID = parseInt(msg.data)			
	// 			if(userID){
	// 				sessionServices.set('user', user); 
	// 				scope.$emit('loginSuccess'); 
	// 			}else{
	// 				scope.$emit('loginFailure'); 
	// 			}
	// 		});
	// 		},
			
	// 	 logOutUser:function(){
	// 		 sessionServices.destory('user');
	// 		 $rootScope.$broadcast('showHideNaveBar', [false]);
			 
	// 	 },
	// 	 islogged:function(){
	// 		 if(sessionServices.get('user')) return true;
	// 	 }

	// 	}
}]);