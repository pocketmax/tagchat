'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatmessageCtrl
 * @description
 * # ChatmessageCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('ChatmessageCtrl', ['$scope','$q','$filter','auth',function ($scope, $q, $filter, auth) {

    $scope.loadTags = function(query) {
      var q = $q.defer();
      q.resolve($filter('filter')($scope.localTags, query));
      return q.promise;
    };

    $scope.addMessage = function(){

      var tmpTags = {};
      for(var i in $scope.tags){
        tmpTags[$scope.tags[i].text] = true;
      }

      var msg = {
        from: auth.profile.nickname,
        insertedDtTm: Firebase.ServerValue.TIMESTAMP,
        msg: $scope.newMessage,
        tags: tmpTags
      };
      var id = new Date().getTime();
      $scope.items[id]=msg;
      $scope.newMessage='';
    };

  }]);
