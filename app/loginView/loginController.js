/**
 * Created by AMirza on 6/11/17.
 */

userSystem.controller('loginController', ['$scope', function ($scope) {

    $scope.login = function () {
        $scope.message = "Welcome " + $scope.user.email;
    };
}]);