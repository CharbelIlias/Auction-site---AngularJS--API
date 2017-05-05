angular.module('Customer')
.controller('CustomerController', function($scope,$location, CustomerService) {
    

    $scope.customer = {
        firstName: null,
        lastName: null,
        address: null,
        postalCode: null,
        city: null,
        phone: null,
        email: null,
        password: null,
    };

    $scope.Create = function() {
        CustomerService.CreateCustomer($scope.customer)
        .then(function successCallback(response) {
            console.log(response)
            $location.path('/SuccessCreate');
            //  $location.path(window.history.back());
            }, function errorCallback(response) {
                console.log(response)
            });  
    };

    $scope.previousPage = function() {
        window.history.back()
    };
})
