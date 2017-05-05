angular.module('Suppliers')
.controller('SupplierDetailsController', function($scope, $routeParams, SupplierService) {
        SupplierService.GetSupplier($routeParams.supplierId).then(function(result) {
            $scope.Supplier = result.data;
        });

    $scope.previousPage = function() {
        window.history.back()
    };
})
