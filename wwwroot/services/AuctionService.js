angular.module('Auctions', [])
.factory('AuctionService', function($http) {
    return {
        GetAllAuctions: function() {
            return $http.get("http://nackademiskasecure.azurewebsites.net/api/auction");
        },
         GetAuction: function(id){
             return $http.get("http://nackademiskasecure.azurewebsites.net/api/auction/" + id);
         },
        GetCategories: function() {
            return $http.get("http://nackademiskasecure.azurewebsites.net/api/category");
        },
        GetBids: function(id){
             return $http.get("http://nackademiskasecure.azurewebsites.net/api/bid/" + id);
         },
        NewBid: function(auctionId, customerId, bidPrice){
             return $http.post("http://nackademiskasecure.azurewebsites.net/api/bid",
              {"auctionId": auctionId,  "customerId": customerId, "bidPrice":bidPrice}, {withCredentials: true});
         },
        BuyNow: function(auctionId, customerId) {
            return $http.post("http://nackademiskasecure.azurewebsites.net/api/auction/buynow",
            {"auctionId": auctionId,  "customerId": customerId}, {withCredentials: true});
        }
    }
})