const elements = require('../src/elements.js');

describe('elements', () => {
  describe('elements1To20', () => {
    test('should contain 20 elements', () => {
      const testElements = elements.elements1To20;
      expect(testElements.length).toBe(20);
    });
  });

  describe('elements21To38', () => {
    test('should contain 17 elements', () => {
      const testElements = elements.elements21To38;
      expect(testElements.length).toBe(18);
    });
  });
});
