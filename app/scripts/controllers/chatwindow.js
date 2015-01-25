'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatwindowCtrl
 * @description
 * # ChatwindowCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('ChatwindowCtrl', function ($scope, dataLink) {
      $scope.name = 'World';
      $scope.chatLines = dataLink.messages
      $scope.chatRooms = [{
        name: 'first room'
      },{
        name: 'second room'
      }];
  });
