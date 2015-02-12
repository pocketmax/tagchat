'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatmessageCtrl
 * @description
 * # ChatmessageCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('ChatmessageCtrl', ['$scope','auth',function ($scope, auth) {

    $scope.addMessage = function(){

      var tmpTags = {};
      for(var i in $scope.tags){
        tmpTags[$scope.tags[i].text] = true;
      }

      var id = new Date().getTime().toString();
      $scope.msgs[id]={
        from: auth.profile.nickname,
        msg: $scope.newMessage,
        tags: tmpTags
      };
      $scope.newMessage='';
    };

  }]);
