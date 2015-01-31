'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var MainCtrl, scope;

  var $routeParams = { roomId: 'testing123' };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $firebase, $routeParams) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $firebase: $firebase,
      $routeParams: $routeParams
    });
  }));

  it('should attach "items" to $scope', function () {
    expect(scope.items).toBeDefined();
  });

  it('should get roomId from $routeParams', function () {
    expect($routeParams.roomId).not.toBe('');
  });

  it('should start firebase service', function () {
  });


});
