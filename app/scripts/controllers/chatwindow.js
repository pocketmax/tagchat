'use strict';

/**
 * @ngdoc function
 * @name tagchatApp.controller:ChatwindowCtrl
 * @description
 * # ChatwindowCtrl
 * Controller of the tagchatApp
 */
angular.module('tagchatApp')
  .filter('tags', function(){

    return function(items, listenTags){

      if(!listenTags || !listenTags.length){
        return items;
      }

      var filtered = {};
      for(var i in items){
        var item = items[i];
        if( item && typeof item === 'object' ){
            for(var x in listenTags){
              if( item.tags[listenTags[x].text] ){
                filtered[i]=item;
                continue;
              }
            }
        }
      }

      return filtered;
    };

  })
  .controller('ChatwindowCtrl', ['$scope', function ($scope) {


  }]);
