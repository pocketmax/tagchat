'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
    .controller('MainCtrl', ['Db','$scope', 'auth', 'localTags','$q','$filter',function (Db, $scope, auth, localTags, $q, $filter) {
        $scope.auth = auth;

		$scope.msgs = Db.ref;
        $scope.loadTags = function(query) {
            var q = $q.defer();
            q.resolve($filter('filter')(localTags, query));
            return q.promise;
        };


    }]);
