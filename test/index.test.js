const chemistryElements = require('../index.js');

describe('main package', () => {
  describe('should have its methods and properties available', () => {
    test('should have elements21To38 property', () => {
      const result = chemistryElements.elements21To38;
      expect(result.length).toBe(18);
    });

    test('should have elements1To20 property', () => {
      const result = chemistryElements.elements1To20;
      expect(result.length).toBe(20);
    });
  });
});
