'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
    .controller('MainCtrl', ['$scope', 'auth', 'localTags','Db','$q','$filter',function ($scope, auth, localTags, Db, $q, $filter) {
        $scope.auth = auth;
        Db.bind($scope,"msgs");

        $scope.loadTags = function(query) {
            var q = $q.defer();
            q.resolve($filter('filter')(localTags, query));
            return q.promise;
        };


    }]);
