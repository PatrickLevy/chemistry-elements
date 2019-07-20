const groups = require('../src/elements.js');

describe('groups', () => {
  describe('elements1To20', () => {
    test('groups should be an object', () => {
      expect(typeof groups).toBe('object');
    });
  });

});
