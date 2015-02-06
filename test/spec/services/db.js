'use strict';

describe('Service: db', function () {

  // load the service's module
  beforeEach(module('tagchatApp'));

  // instantiate service
  var Db;

  beforeEach(inject(function (_Db_) {
    Db = _Db_;
  }));

  // TODO: figure out how to properly test a service that injects third party objects
  it('should do something', function () {
    expect(0).toBe(0);
  });

});
