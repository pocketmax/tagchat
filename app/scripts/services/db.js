'use strict';

/**
 * @ngdoc service
 * @name tagchatApp.db
 * @description
 * # db
 * Service in the tagchatApp.
 */
angular.module('tagchatApp')
    .service('Db', ['$firebase', '$routeParams', function Db($firebase, $routeParams) {

        var ref = new Firebase('https://burning-fire-3434.firebaseio.com/tagchat/chatrooms/' + $routeParams.roomId + "/messages");
        var sync = $firebase(ref);
        var syncObject = sync.$asObject();
        this.timestamp = Firebase.ServerValue.TIMESTAMP;
        this.data = {};
        this.bind = function(scope, field){
            syncObject.$bindTo(scope, field);
        };


    }]);
