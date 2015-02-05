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
    scope = { msgs: {}, newMessage: 'my message' };
    auth = { profile: { nickname: 'test' } };
    Db = { timestamp: 'stamp'};
    ChatmessageCtrl = $controller('ChatmessageCtrl', {
      $scope: scope,
      auth: auth,
      Db: Db
    });
    scope.addMessage();
  }));

  describe('message object', function () {
    it('should populate from field', function () {
      var msg;
      for(var i in scope.msgs){
        msg = scope.msgs[i];
      }
      expect(msg.from).toBe('test');
    });

    it('should populate the inserted date and time field', function () {
      var msg;
      for(var i in scope.msgs){
        msg = scope.msgs[i];
      }
      expect(msg.insertedDtTm).toBe('stamp');
    });

    it('should populate the message field', function () {
      var msg;
      for(var i in scope.msgs){
        msg = scope.msgs[i];
      }
      expect(msg.msg).toBe('my message');
    });

    it('should populate the tags field', function () {
      var msg;
      for(var i in scope.msgs){
        msg = scope.msgs[i];
      }
      expect(msg.tags).toBe(tags);
    });

  });

  it('should clear the new message field', function () {
    expect(scope.newMessage).toBe('');
  });


});
