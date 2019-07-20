const methods = require('../src/methods.js');

describe('methods', () => {
  describe('getElements', () => {
    test('should return all elements when no parameters are passed in', () => {
      expect(methods.getElements().length).toBe(59);
    });
  });

  describe('getRandomSelectionOfElements', () => {
    test('should return all elements when no parameters are passed in', () => {
      expect(methods.getRandomSelectionOfElements().length).toBe(59);
    });
  });
});
