angular.module('Customer', [])
.factory('CustomerService', function($http) {
    return {

        CreateCustomer: function(customer){
            return $http.post("http://nackademiskasecure.azurewebsites.net/api/customer", customer);
        },
        GetCustomer: function(id){
            return $http.get("http://nackademiskasecure.azurewebsites.net/api/customer/" + id);
        }
    }
})