'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
    .controller('MainCtrl', ['$firebase', 'FBURL', '$routeParams', '$scope', 'auth', 'store', function ($firebase, FBURL, $routeParams, $scope, auth, store) {

        $scope.auth = auth;

        var ref = new Firebase(FBURL + "/tagchat/chatrooms/" + $routeParams.roomId + "/messages");
        var sync = $firebase(ref);
        var syncObject = sync.$asObject();
        syncObject.$bindTo($scope, "items");
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

        if(auth.profile && auth.profile.nickname){
            $scope.listenTags = store.get('profile').listenTags;
        } else {
            $scope.listenTags = [];
        }

        $scope.$watchCollection('listenTags', function(newVal){

            if(!auth.profile || !auth.profile.nickname){
                return false;
            }

            auth.profile.listenTags = newVal;
            store.set('profile', auth.profile);
        });

    }]);
