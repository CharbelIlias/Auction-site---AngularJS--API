angular.module('Auctions')
.controller('AuctionController', function($scope, AuctionService) {
    AuctionService.GetAllAuctions().then(function(result) {
        $scope.AuctionList = result.data;

    });

     $scope.dateComparison = function(a,b) {
        return new Date(a) >= new Date(b);
    };

    AuctionService.GetCategories().then(function(result) {
        $scope.CategoryList = result.data;

    });

    $scope.search = function(item) {
        if($scope.searchText == undefined){
            return true;
        }
        else {
            if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase())) {
                return true;
            }
        }

        return false;
    }
})
