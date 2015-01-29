'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatmessageCtrl
 * @description
 * # ChatmessageCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('ChatmessageCtrl', function ($scope, $q, $filter, timestamp) {

    var tags = [
      'angularJS',
      'bootstrapJS',
      'java',
      'mongoDB',
      'nodeJS',
      'phonegap',
      'touch',
      'extjs',
      'css',
      'sass',
      'compass',
      'less'
    ];

    $scope.loadTags = function(query) {
      var q = $q.defer();
      q.resolve($filter('filter')(tags, query));
      return q.promise;
    };

    $scope.addMessage = function(){

      var tmpTags = [];
      for(var i in $scope.tags){
        tmpTags.push($scope.tags[i].text);
      }

      $scope.items[timestamp]={
        from: 'bla',
        msg: $scope.newMessage,
        tags: tmpTags
      };
      $scope.newMessage='';
    };

  });
