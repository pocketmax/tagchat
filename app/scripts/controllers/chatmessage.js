'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatmessageCtrl
 * @description
 * # ChatmessageCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
	.controller('ChatmessageCtrl', ['$scope', 'auth', 'Db', function ($scope, auth, Db) {

		$scope.addMessage = function () {

			var tmpTags = {};
			for (var i in $scope.tags) {
				tmpTags[$scope.tags[i].text] = true;
			}
			Db.ref.$add({
				from: auth.profile.nickname,
				msg: $scope.newMessage,
				timestamp: (new Date()).getTime().toString(),
				tags: tmpTags
			});
			$scope.newMessage = '';

		};

	}]);
