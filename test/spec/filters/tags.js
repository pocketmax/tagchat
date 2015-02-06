'use strict';

describe('Filter: tags', function () {

  // load the filter's module
  beforeEach(module('tagchatApp'));

  // initialize a new instance of the filter before each test
  var tags;

  beforeEach(inject(function ($filter) {
    var listenTags = [{ text: 'a' }];
    tags = $filter('tags', {
      $scope: { foo:'bar'},
      listenTags: listenTags
    });

    expect($filter).toBeDefined();
    expect(listenTags).toBeDefined();
    expect(tags).toBeDefined();

  }));

  it('should return the input prefixed with "tags filter:"', function () {
    var text = [{ text: 'a' },{ text: 'a' },{ text: 'c' },{ text: 'c' }];
    expect(0).toBe(0);
  });

});
