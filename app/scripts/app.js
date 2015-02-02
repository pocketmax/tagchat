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
    'angular-md5',
    'auth0',
    'angular-storage',
    'angular-jwt'
  ])
  .constant('FBURL', 'https://burning-fire-3434.firebaseio.com')
  .run(function(auth){
    auth.hookEvents();
  })
  .config(['md5Provider','$routeProvider','authProvider',function(md5Provider, $routeProvider,authProvider){

    authProvider.init({
      domain: 'pocketmax.auth0.com',
      clientID: 'DNEZl7eBk5zKsShshgW4E4ADyFTELkzq'
    });

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
