'use strict';

describe('Controller: ListentagsCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var ListentagsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListentagsCtrl = $controller('ListentagsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
