const utils = require('../src/util.js');
const elements = require('./elements');

function randomizeList(sourceElements, numberToGet = sourceElements.length) {
  const problemSet = [];

  // Randomize the list
  for (let i = 0; i < numberToGet; i += 1) {
    // Get a random element
    const index = utils.getRandomIntInclusive(0, sourceElements.length - 1);

    // add to return list
    problemSet.push(sourceElements[index]);

    // remove from main list so we can't add it again
    sourceElements.splice(index, 1);
  }

  return problemSet;
}

function getRandomSelectionOfElements(numberToGet = elements.allElements.length, includeOthers = false, sourceElements = elements.allElements) {
  let allElements = sourceElements;

  if (!includeOthers) {
    allElements = allElements.filter(e => (!['otherNonMetal', 'otherMetal'].includes(e.group.id)));
  }
  return randomizeList(allElements, numberToGet);
}

function getElements(startingAtomicNumber = 1, endingAtomicNumber = 118) {
  return elements.allElements.filter(element => {
    return element.protons >= startingAtomicNumber && element.protons <= endingAtomicNumber;
  });
}

module.exports = {
  getRandomSelectionOfElements,
  randomizeList,
  getElements,
};
