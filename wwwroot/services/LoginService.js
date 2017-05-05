angular.module('Authentication', [])
.factory('LoginService', function($http) {
    var loggedInUser = null;
    var userId = null;
    return {
        login: function(email, password) {
          return $http.post('http://nackademiskasecure.azurewebsites.net/api/account/login',
             {"email": email, "password": password}, {withCredentials: true});
        },
        setLoggedInUser: function(user) {
            this.loggedInUser = user;
            this.userId = user.id;
        },
        isLoggedIn: function() {
            return (this.loggedInUser != null)
        },
        loggedIn: function() {
            return this.userId;
        }
    }
});