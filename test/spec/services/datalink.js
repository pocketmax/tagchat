'use strict';

describe('Service: dataLink', function () {

  // load the service's module
  beforeEach(module('tagchatApp'));

  // instantiate service
  var dataLink;
  beforeEach(inject(function (_dataLink_) {
    dataLink = _dataLink_;
  }));

  it('should do something', function () {
    expect(!!dataLink).toBe(true);
  });

});
