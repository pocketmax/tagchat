'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('tagchatApp'));

    var MainCtrl,
        scope = {},
        auth = {},
        localTags,
        Db,
        q;

    beforeEach(inject(function ($controller, $filter) {
        Db = new MockDb();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            auth: auth,
            localTags: localTags,
            Db: Db,
            $q: q,
            $filter: $filter
        });
    }));

    it('should data bind to $scope.msgs', function () {
        expect(scope.msgs).toBeDefined();
    });

    it('should assign auth to $scope.auth', function () {
        expect(scope.auth).toBe(auth);
    });

    // TODO: figure out how to properly test promises
    it('should filter results from localTags', function () {
    });

});
