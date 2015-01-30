'use strict';

/**
 * @ngdoc overview
 * @name tagchatApp
 * @description
 * # tagchatApp
 *
 * Main module of the application.
 */
angular
  .module('tagchatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'luegg.directives',
    'firebase',
    'ngTagsInput',
    'angular-md5'
  ])
  .value('timestamp',Firebase.ServerValue.TIMESTAMP)
  .constant('FBURL', 'https://burning-fire-3434.firebaseio.com')
  .config(['md5Provider','$routeProvider',function(md5Provider, $routeProvider){

    var newRoomId = md5Provider.$get[0]().createHash((new Date().getTime()).toString());
    $routeProvider
    .when('/:roomId', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/' + newRoomId
    });

  }]);
