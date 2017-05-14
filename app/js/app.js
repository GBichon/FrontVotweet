'use strict';
// Declare app level module which depends on filters, and services
var app= angular.module('myApp', ['ngRoute',   'voTweet.filters',
  'voTweet.services',
  'voTweet.directives',
  'voTweet.controllers']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/admin', {templateUrl: 'view/vistaAdministradorCandidatos.html', controller: 'listUsuariosCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);


app.run(function($rootScope, $location, loginService){
	var routespermission=['/home','/admin'];  //route that require login
	$rootScope.$on('$routeChangeStart', function(){
		if( routespermission.indexOf($location.path()) !=-1)
		{
			var connected=loginService.islogged();
			connected.then(function(msg){
				if(!msg.data) $location.path('/login');
			});
		}
	});
});