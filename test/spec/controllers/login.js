'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var LoginCtrl,
      store = {},
      scope = {},
      auth = { signout: function(){} };

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

      this.remove = function (field) {
        delete core[field];
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

    it('should run auth.signout()', function () {
      spyOn(auth, 'signout');
      scope.logout();
      expect(auth.signout).toHaveBeenCalled();
    });

    it('should remove cached profile object', function () {
      spyOn(store, 'remove');
      scope.logout();
      expect(store.remove).toHaveBeenCalledWith('profile');
      expect(store.get('profile')).toBeUndefined();
    });

    it('should remove cached token object', function () {
      spyOn(store, 'remove');
      scope.logout();
      expect(store.remove).toHaveBeenCalledWith('token');
      expect(store.get('token')).toBeUndefined();
    });

    it('should remove cached localTags object', function () {
      spyOn(store, 'remove');
      scope.logout();
      expect(store.remove).toHaveBeenCalledWith('localtag');
      expect(store.get('localTags')).toBeUndefined();
    });

  });

});
