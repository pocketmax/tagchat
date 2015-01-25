'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatmessageCtrl
 * @description
 * # ChatmessageCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('ChatmessageCtrl', function ($scope, dataLink) {

    $scope.addMessage = function(){
      if(!$scope.newMessage){
        return false;
      }
      dataLink.messages.push({ message: $scope.newMessage});
      $scope.newMessage='';
    };

  });
