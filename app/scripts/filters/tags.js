'use strict';

/**
 * @ngdoc filter
 * @name tagchatApp.filter:tags
 * @function
 * @description
 * # tags
 * Filter in the tagchatApp.
 */
angular.module('tagchatApp')
    .filter('tags', ['listenTags', function (listenTags) {
        return function (items) {


            if(!listenTags.length){
                return items;
            }

            var filtered = {};
            for (var i in items) {
                var item = items[i];
                if (item && typeof item === 'object') {
                    for (var x in listenTags) {
                        if (item.tags[listenTags[x].text]) {
                            filtered[i] = item;
                            continue;
                        }
                    }
                }
            }

            return filtered;

        };
    }]);
