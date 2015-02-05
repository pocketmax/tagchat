'use strict';

describe('Controller: ListenertagsCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var ListenertagsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListenertagsCtrl = $controller('ListenertagsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
