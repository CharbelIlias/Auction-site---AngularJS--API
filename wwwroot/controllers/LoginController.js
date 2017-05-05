angular.module('Authentication')
.controller('LoginController', function($scope,$location, LoginService, CustomerService) {
    $scope.email = "";
    $scope.password = "";
    $scope.message = "";

    $scope.goBack = function() {
        $location.path("/")
    }

    $scope.login = function() {
        LoginService.login($scope.email, $scope.password)
        .then(function(response) {
            CustomerService.GetCustomer(response.data.id).then(function(contact){
                LoginService.setLoggedInUser(contact.data);
                $location.path(window.history.back());
            })
        }, function(response) {
            $scope.message = "Felaktiga uppgifter.";
        });
    }

    $scope.previousPage = function() {
        window.history.back()
    };
});