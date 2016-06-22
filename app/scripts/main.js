// // jshint devel:true
// angular.module('foodyApp', ['ui.router'])
// .config(['$stateProvider', function ($stateProvider, $urlRouterProvider){
// 	$stateProvider.state('home' , { 
// 		url:'/',
// 		templateUrl:'layout.html'
// 	})
// }]);

var foodyMainApp = angular.module('foodyApp', ['ui.router']);

//Rest Api 
var hostname = "localhost";
var portAddr = "8080";
var restUrlPart = "/RESTfulExample/rest";
var restUrlMain = "http://" + hostname + ":" + portAddr + restUrlPart;

//Login Service
var loginService = "/login";
var loginService_verifyDetailsForLogin = loginService + "/verifyDetailsForAdminLogin";

//Restaurant Service
var createRestaurantLoginService = "/restaurant";
var createRestaurantLoginService_create = createRestaurantLoginService + "/create";