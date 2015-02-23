'use strict';

/**
 * @ngdoc service
 * @name tagchatApp.db
 * @description
 * # db
 * Service in the tagchatApp.
 */
angular.module('tagchatApp')
	.service('Db', ['$firebase', '$routeParams', function ($firebase, $routeParams) {
		var ref = new Firebase('https://burning-fire-3434.firebaseio.com/tagchat/chatrooms/' + $routeParams.roomId + "/messages");
		this.ref = $firebase(ref).$asArray();

	}]);
