'use strict';

/**
 * @ngdoc service
 * @name tagchatApp.dataLink
 * @description
 * # dataLink
 * Service in the tagchatApp.
 */
angular.module('tagchatApp')
  .service('dataLink', function Datalink() {

      return {
        messages: [{
          message: "testing123"
        },{
          message: "abc"
        }]
      };

  });
