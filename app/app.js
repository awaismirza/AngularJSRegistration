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
        .when('/register', {
            templateUrl: 'Register/register.html',
            controller: 'registerController'
        })
        .when('/success', {
            templateUrl: 'success/success.html',
            controller: 'successController'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);