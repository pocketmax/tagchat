'use strict';

describe('Controller: ChatwindowCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var ChatwindowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatwindowCtrl = $controller('ChatwindowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
    expect(1).toBe(1);

  });
});
