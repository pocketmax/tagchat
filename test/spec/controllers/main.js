'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var MainCtrl,
      scope,
      auth,
      localTags,
      Db,
      q,
      filter;

  beforeEach(inject(function ($controller) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      auth: auth,
      localTags: localTags,
      Db: Db,
      $q: q,
      $filter: filter
    });
  }));

  it('should data bind to $scope.msgs', function () {

  });

  it('should assign auth to $scope.auth', function () {
    expect($routeParams.roomId).not.toBe('');
  });

  // TODO: figure out how to properly test filtering results
  it('should filter results from localTags', function () {
  });

});
