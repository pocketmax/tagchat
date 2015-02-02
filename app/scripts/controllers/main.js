'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
    .controller('MainCtrl', ['$firebase', 'FBURL', '$routeParams', '$scope', function ($firebase, FBURL, $routeParams, $scope) {

        var ref = new Firebase(FBURL + "/tagchat/chatrooms/" + $routeParams.roomId + "/messages");
        var sync = $firebase(ref);
        var syncObject = sync.$asObject();
        syncObject.$bindTo($scope, "items");
        $scope.listenTags = [];
        $scope.localTags = [
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


    }]);
