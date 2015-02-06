'use strict';

describe('Controller: LoginCtrl', function () {

    // load the controller's module
    beforeEach(module('tagchatApp'));

    var LoginCtrl,
        store,
        scope = {},
        auth;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
        store = new MockStore();
        auth = new MockAuth();

        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope,
            store: store,
            auth: auth
        });

    }));

    describe('login()', function () {

        it('should call auth.signin()', function () {

            spyOn(auth, 'signin').and.callThrough();
            spyOn(store, 'set');

            scope.login();
            expect(auth.signin).toHaveBeenCalled();
            expect(store.set.calls.count()).toBe(2);

        });

    });

    describe('logout()', function () {

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
            expect(store.remove).toHaveBeenCalledWith('localTags');
            expect(store.get('localTags')).toBeUndefined();
        });

    });

});
