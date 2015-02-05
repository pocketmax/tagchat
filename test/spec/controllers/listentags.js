'use strict';

describe('Controller: ListentagsCtrl', function () {

    // load the controller's module
    beforeEach(module('tagchatApp'));

    var ListentagsCtrl,
        listenTags = [{text: 'a'}],
        store,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        store = new function () {
            var core = {};

            this.get = function (field) {
                return core[field];
            };

            this.set = function (field, data) {
                core[field] = data;
            };

        };

        ListentagsCtrl = $controller('ListentagsCtrl', {
            $scope: scope,
            store: store,
            listenTags: listenTags
        });
    }));

    it('should set $scope.listenTags', function () {
        expect(scope.listenTags).toBe(listenTags);
    });

    it('should cache listenTag to local hd', function () {
        scope.cacheTags();
        expect(store).toBeDefined();
        expect(store.get('listenTags')).toBe(listenTags);
    });
});
