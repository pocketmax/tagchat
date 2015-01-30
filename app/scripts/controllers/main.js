'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('MainCtrl', ['$scope','$routeParams','$firebase','FBURL',function ($scope, $routeParams, $firebase, FBURL) {

        var ref = new Firebase(FBURL + "/tagchat/chatrooms/" + $routeParams.roomId + "/messages");
        var sync = $firebase(ref);
        var syncObject = sync.$asObject();
        syncObject.$bindTo($scope, "items");
}]);
