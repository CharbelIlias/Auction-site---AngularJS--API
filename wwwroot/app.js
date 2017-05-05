var app = angular.module('KarbelAuktion', ['ngRoute','Auctions','Suppliers','Customer','Authentication']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "views/main.html",
        controller: "AuctionController"
    })
    .when('/auction/Supplier/:supplierId', {
        templateUrl: "views/SupplierDetails.html",
        controller: "SupplierDetailsController"
    })
    .when('/auction/:auctionId', {
        templateUrl: "views/AuctionDetails.html",
        controller: "AuctionDetailsController"
    })
    .when('/BidHistory/:auctionId', {
        templateUrl: "views/BidHistory.html",
        controller: "AuctionDetailsController"
    })
    .when('/CreateCustomer', {
        templateUrl: "views/CreateCustomer.html",
        controller: "CustomerController"
    })
    .when('/login', {
        templateUrl: "views/login.html",
        controller: "LoginController"
    })
    .when('/SuccessCreate', {
        templateUrl: "views/SuccessCreate.html",
        controller: "CustomerController"
    })
    .otherwise({
        templateUrl: "views/error.html"
    });
     $locationProvider.html5Mode(true);
});