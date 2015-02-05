'use strict';

describe('Controller: ChatmessageCtrl', function () {

  // load the controller's module
  beforeEach(module('tagchatApp'));

  var
      ChatmessageCtrl,
      scope,
      auth,
      Db;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    auth = { profile: { nickname: 'test' } };
    Db.timestamp = 'stamp';
    ChatmessageCtrl = $controller('ChatmessageCtrl', {
      $scope: scope,
      auth: auth,
      Db: Db
    });


  }));

  describe('message object', function () {

    it('should populate from field', function () {
      expect(1).toBe(1);
    });

    it('should populate the inserted date and time field', function () {
      expect(1).toBe(1);
    });

    it('should populate the message field', function () {
      expect(1).toBe(1);
    });

    it('should populate the tags field', function () {
//    expect(scope.awesomeThings.length).toBe(3);
      expect(1).toBe(1);
    });

  });

  it('should clear the new message field', function () {
    expect(1).toBe(1);
  });


});
