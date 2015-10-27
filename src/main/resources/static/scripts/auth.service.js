"use strict";

saApp.factory('AuthService', function ($http) {
    return {
        //login: function(user) {
        //    $http.post("/login", user).then(
        //        function(success) {
        //            console.log('a');
        //        },
        //        function(error) {
        //            console.log('b');
        //        }
        //    );
        //},
        //login: function(credentials) {
        //    var data = 'username=' + encodeURIComponent(credentials.username) +
        //        '&password=' + encodeURIComponent(credentials.password) +
        //        '&submit=Login';
        //    return $http.post('/login', data, {
        //        headers: {
        //            'Content-Type': 'application/x-www-form-urlencoded'
        //        }
        //    }).success(function (response) {
        //        console.log('a');
        //    }).catch(function(error) {
        //        console.log('b');
        //    });
        //},

        login: function(credentials) {
           $http({
               method: 'POST',
               url: '/login',
               data: credentials,
               headers: {'Content-Type': 'application/x-www-form-urlencoded'}
           }).then(
               function(){
                   this.credentials = credentials;
               },function(error){
                   console.log(error);
               }

           );
        },

        register: function(user) {
            $http.post("/register", user);
        }
    };
});
