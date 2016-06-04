foodyMainApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
        url: '/',
        templateUrl: '/views/loginPage.html',
        controller: 'loginController'
    });

    $stateProvider
        .state('dashboard', {
	        url: '/dashboard',
	        templateUrl: '/views/adminDashboard.html',
	        controller: 'adminDashboardController'
	    })
	    .state('dashboard.createEmployeeLogin', {
	        url: '/createemployeeaccess',
	        templateUrl: '/views/createEmployeeLogin.html',
	        controller: 'createEmployeeLoginController'
	    })
	    .state('dashboard.createRestaurantLogin', {
	        url: '/createRestaurantLogin',
	        templateUrl: '/views/createRestaurantLogin.html',
	        controller: 'createRestaurantLoginController'
	    });


  }]);


        
// //     // $urlRouterProvider.otherwise('/views/errorPage.html');
// // });

// <!--
// // .state('dashboard', {
// //             url: '/dashboard',
// //             templateUrl: '/views/adminDashboard.html',
// // 			controller: 'adminDashboardController'
// //         })
// //         .state('dashboard.createEmployeeLogin', {
// //             url: '/createEmployeeLogin',
// //             templateUrl: '/views/createEmployeeLogin.html',
// // 			controller: 'createEmployeeLoginController'
// //         });