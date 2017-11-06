/**
 * Created by AMirza on 6/11/17.
 */
userSystem.controller('registerController', ['$scope', function ($scope) {
    $scope.register = function () {
        $scope.message = "Welcome " + $scope.user.email;
    }
}]);