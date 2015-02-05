'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ListenertagsCtrl
 * @description
 * # ListenertagsCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .controller('ListentagsCtrl', ['$scope','store','listenTags',function ($scope, store, listenTags) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.listenTags = listenTags;

    $scope.cacheTags = function(){
      store.set('listenTags', listenTags);

    };


  }]);
