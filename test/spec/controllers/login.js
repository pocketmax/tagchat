'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var LoginCtrl,
      store = {},
      scope = {},
      auth;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    store = new function () {
      var core = {};

      this.get = function (field) {
        return core[field];
      };

      this.set = function (field, data) {
        core[field] = data;
      };

    };
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      store: store,
      auth: auth
    });
  }));

  describe('login()', function(){

    // TODO: figure out how to unit test async code
    it('should do something', function () {
      expect(0).toBe(0);
    });

  });

  describe('logout()', function(){

    // TODO: use the assert to detect if a function was run
    it('should run auth.signout()', function () {
      expect(0).toBe(0);

    });

    it('should remove cached profile object', function () {
      expect(store.get('profile')).toBeUndefined();
    });

    it('should remove cached token object', function () {
      expect(store.get('token')).toBeUndefined();
    });

    it('should remove cached localTags object', function () {
      expect(store.get('localTags')).toBeUndefined();
    });

  });

});
