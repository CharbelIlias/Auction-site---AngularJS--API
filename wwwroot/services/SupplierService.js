angular.module('Suppliers', [])
.factory('SupplierService', function($http) {
    return {

        GetSupplier: function(id){
            return $http.get("http://nackademiskasecure.azurewebsites.net/api/supplier/" + id);
        }
    }
})