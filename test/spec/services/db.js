'use strict';

describe('Service: db', function () {

  // load the service's module
  beforeEach(module('tagchatApp'));

  // instantiate service
  var firebase,
      routeParams = { roomtId: 'test' };

  beforeEach(inject(function (_db_) {
    db = _db_;
  }));

  // TODO: figure out how to properly test a service that injects third party objects
  it('should do something', function () {
    expect(!!db).toBe(true);
  });

});
