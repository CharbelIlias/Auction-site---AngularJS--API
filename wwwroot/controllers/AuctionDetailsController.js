angular.module('Auctions')
.controller('AuctionDetailsController', function($scope, $routeParams, AuctionService, LoginService, $location) {

        var customerId = LoginService.loggedIn();
        $scope.Bid = {bidPrice: null};
        var auctionId = $routeParams.auctionId;
        $scope.message = '';

        $scope.previousPage = function() {
        window.history.back()
        };


        AuctionService.GetAuction($routeParams.auctionId).then(function(result) {
            $scope.Auction = result.data;
        });

         AuctionService.GetBids($routeParams.auctionId).then(function(res) {
            $scope.BidList = res.data;
            $scope.MaxBid = $scope.BidList[$scope.BidList.length-1].bidPrice;
        });

        $scope.CreateNewBid = function() {
            if(!LoginService.isLoggedIn()){
                $location.path('/login');
            }

            console.log(auctionId)
            console.log(customerId)
            console.log($scope.Bid.bidPrice)
            var bidPrice =  $scope.Bid.bidPrice;

            AuctionService.NewBid(auctionId, customerId, bidPrice)
            .then(function successCallback(response) {
            alert("Budet har lagts till!");
            console.log(response)
             $location.path(window.history.back());
            }, function errorCallback(response) {
                console.log(response)
            });   
        }

        $scope.BuyNow = function() {
            if(!LoginService.isLoggedIn()){
                $location.path('/login');
            }

            console.log(auctionId)
            console.log(customerId)

            AuctionService.BuyNow(auctionId, customerId)
            .then(function successCallback(response) {
            alert("Du har köpt denna vara!");
            console.log(response)
             $location.path('/');
            }, function errorCallback(response) {
                console.log(response)
            });   
        }
})
