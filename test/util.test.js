const utils = require('../src/util.js');

describe('utils', () => {
  describe('getRandomIntInclusive', () => {
    test('should always return a random number between the specified min and max', () => {
      for (let i = 0; i < 100; i++ ) {
        const min = 3;
        const max = 12;
        const randomNumber = utils.getRandomIntInclusive(min, max);
        const withinRange = randomNumber >= min && randomNumber <= max;
        expect(withinRange).toEqual(true);
      }
    });
  });
});
