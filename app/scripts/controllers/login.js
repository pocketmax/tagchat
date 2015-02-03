'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
    .controller('LoginCtrl', ['store','$scope','auth',function (store, $scope, auth) {
        $scope.login = function () {
            auth.signin({}, function (profile, token) {
                // Success callback
                store.set('profile', profile);
                store.set('token', token);
            }, function (arg1) {
                console.log(arg1);
            });
        };
        $scope.logout = function () {
            auth.signout();
            store.remove('profile');
            store.remove('token');
        }

    }]);
