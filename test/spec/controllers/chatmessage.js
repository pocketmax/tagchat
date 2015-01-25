'use strict';

describe('Controller: ChatmessageCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var ChatmessageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatmessageCtrl = $controller('ChatmessageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
