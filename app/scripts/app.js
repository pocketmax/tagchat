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
	.run(['auth', 'store', 'jwtHelper', function (auth, store, jwtHelper) {

		//hook in all auth when app loads
		auth.hookEvents();

		//can be wrapped in a service for basic auth
		if (!auth.isAuthenticated) {
			var token = store.get('token');
			if (token) {
				if (!jwtHelper.isTokenExpired(token)) {
					auth.authenticate(store.get('profile'), token);
				}
			}
		}
	}])
	.value('listenTags', [])
	.value('localTags', [
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
	])
	.config(['md5Provider', '$routeProvider', 'authProvider', '$locationProvider', function (md5Provider, $routeProvider, authProvider, $locationProvider) {

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

        $locationProvider.html5Mode(true);

	}]);
