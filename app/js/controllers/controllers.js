'use strict';

/* Controllers */

angular.module('voTweet.controllers', []).

controller('listUsuariosCtrl',['$scope','listUser',function ($scope,listUser) {
	$scope.usuarios=listUser.getUsers();
	// body...
}])

