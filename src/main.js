import getRandomIntInclusive from './util';
import {
  elements1To20,
  elements21To38,
  elementsAdditional
} from './elements';

export function randomizeList(sourceElements, numberToGet = sourceElements.length) {
  const problemSet = [];

  // Randomize the list
  for (let i = 0; i < numberToGet; i += 1) {
    // Get a random element
    const index = getRandomIntInclusive(0, sourceElements.length - 1);

    // add to return list
    problemSet.push(sourceElements[index]);

    // remove from main list so we can't add it again
    sourceElements.splice(index, 1);
  }

  return problemSet;
}

export function getRandomSelectionOfElements(numberToGet, includeOthers) {
  let allElements = [
    ...elements1To20,
    ...elements21To38,
    ...elementsAdditional,
  ];

  if (!includeOthers) {
    allElements = allElements.filter(e => (!['otherNonMetal', 'otherMetal'].includes(e.group.id)));
  }
  return randomizeList(allElements, numberToGet);
}

export default {
  elements1To20,
  elements21To38,
  elementsAdditional,
  getRandomSelectionOfElements,
};
