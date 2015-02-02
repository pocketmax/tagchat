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
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.login = function () {
            auth.signin({}, function (profile, token) {
                // Success callback
                store.set('profile', profile);
                store.set('token', token);
                alert('WOO HOO!!');
            }, function (arg1,arg2) {
                console.log(arg1);
                console.log(arg2);
                // Error callback
                alert('DOH!!');
            });
        }

    }]);
