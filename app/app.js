'use strict';

// Declare app level module which depends on views, and components
var userSystem = angular.module('userSystem', [
    'ngRoute', 'ngAnimate'
]);

userSystem.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'loginView/login.html',
        controller: 'loginController'
    })
        .when('/registration', {
            templateUrl: 'app/Register/registerUsers.html',
            controller: 'registerController'
        })
        .when('/success', {
            templateUrl: 'app/success/loginSuccess.html',
            controller: 'successController'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);