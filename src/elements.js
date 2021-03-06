const { groups, metalTypes } = require('./groups.js');

const allElements = [
  {
    elementName: 'Hydrogen',
    symbol: 'H',
    protons: 1,
    neutrons: 0,
    electrons: 1,
    energyLevels: 1,
    electronConfiguration: {
      level1: 1,
      level2: 0,
      level3: 0,
      level4: 0,
    },
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Helium',
    symbol: 'He',
    protons: 2,
    neutrons: 2,
    electrons: 2,
    energyLevels: 1,
    electronConfiguration: {
      level1: 2,
      level2: 0,
      level3: 0,
      level4: 0,
    },
    group: groups.nobleGas,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Lithium',
    symbol: 'Li',
    protons: 3,
    neutrons: 4,
    electrons: 3,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 1,
      level3: 0,
      level4: 0,
    },
    group: groups.alkaliMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Beryllium',
    symbol: 'Be',
    protons: 4,
    neutrons: 5,
    electrons: 4,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 2,
      level3: 0,
      level4: 0,
    },
    group: groups.alkalineEarthMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Boron',
    symbol: 'B',
    protons: 5,
    neutrons: 6,
    electrons: 5,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 3,
      level3: 0,
      level4: 0,
    },
    group: groups.metalloid,
    metalType: metalTypes.metalloid,
    valenceElectrons: 3,
  },
  {
    elementName: 'Carbon',
    symbol: 'C',
    protons: 6,
    neutrons: 6,
    electrons: 6,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 4,
      level3: 0,
      level4: 0,
    },
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 4,
  },
  {
    elementName: 'Nitrogen',
    symbol: 'N',
    protons: 7,
    neutrons: 7,
    electrons: 7,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 5,
      level3: 0,
      level4: 0,
    },
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 5,
  },
  {
    elementName: 'Oxygen',
    symbol: 'O',
    protons: 8,
    neutrons: 8,
    electrons: 8,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 6,
      level3: 0,
      level4: 0,
    },
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 6,
  },
  {
    elementName: 'Fluorine',
    symbol: 'F',
    protons: 9,
    neutrons: 10,
    electrons: 9,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 7,
      level3: 0,
      level4: 0,
    },
    group: groups.halogen,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 7,
  },
  {
    elementName: 'Neon',
    symbol: 'Ne',
    protons: 10,
    neutrons: 10,
    electrons: 10,
    energyLevels: 2,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 0,
      level4: 0,
    },
    group: groups.nobleGas,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 8,
  },
  {
    elementName: 'Sodium',
    symbol: 'Na',
    protons: 11,
    neutrons: 12,
    electrons: 11,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 1,
      level4: 0,
    },
    group: groups.alkaliMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Magnesium',
    symbol: 'Mg',
    protons: 12,
    neutrons: 12,
    electrons: 12,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 2,
      level4: 0,
    },
    group: groups.alkalineEarthMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Aluminum',
    symbol: 'Al',
    protons: 13,
    neutrons: 14,
    electrons: 13,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 3,
      level4: 0,
    },
    group: groups.otherMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 3,
  },
  {
    elementName: 'Silicon',
    symbol: 'Si',
    protons: 14,
    neutrons: 14,
    electrons: 14,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 4,
      level4: 0,
    },
    group: groups.metalloid,
    metalType: metalTypes.metalloid,
    valenceElectrons: 4,
  },
  {
    elementName: 'Phosphorus',
    symbol: 'P',
    protons: 15,
    neutrons: 15,
    electrons: 15,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 5,
      level4: 0,
    },
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 5,
  },
  {
    elementName: 'Sulfur',
    symbol: 'S',
    protons: 16,
    neutrons: 16,
    electrons: 16,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 6,
      level4: 0,
    },
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 6,
  },
  {
    elementName: 'Chlorine',
    symbol: 'Cl',
    protons: 17,
    neutrons: 18,
    electrons: 17,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 7,
      level4: 0,
    },
    group: groups.halogen,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 7,
  },
  {
    elementName: 'Argon',
    symbol: 'Ar',
    protons: 18,
    neutrons: 22,
    electrons: 18,
    energyLevels: 3,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 8,
      level4: 0,
    },
    group: groups.nobleGas,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 8,
  },
  {
    elementName: 'Potassium',
    symbol: 'K',
    protons: 19,
    neutrons: 20,
    electrons: 19,
    energyLevels: 4,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 8,
      level4: 1,
    },
    group: groups.alkaliMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Calcium',
    symbol: 'Ca',
    protons: 20,
    neutrons: 20,
    electrons: 20,
    energyLevels: 4,
    electronConfiguration: {
      level1: 2,
      level2: 8,
      level3: 8,
      level4: 2,
    },
    group: groups.alkalineEarthMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Scandium',
    symbol: 'Sc',
    protons: 21,
    neutrons: 24,
    electrons: 21,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Titanium',
    symbol: 'Ti',
    protons: 22,
    neutrons: 26,
    electrons: 22,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Vanadium',
    symbol: 'V',
    protons: 23,
    neutrons: 28,
    electrons: 23,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Chromium',
    symbol: 'Cr',
    protons: 24,
    neutrons: 28,
    electrons: 24,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Manganese',
    symbol: 'Mn',
    protons: 25,
    neutrons: 30,
    electrons: 25,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Iron',
    symbol: 'Fe',
    protons: 26,
    neutrons: 30,
    electrons: 26,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Cobalt',
    symbol: 'Co',
    protons: 27,
    neutrons: 32,
    electrons: 27,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Nickel',
    symbol: 'Ni',
    protons: 28,
    neutrons: 31,
    electrons: 28,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Copper',
    symbol: 'Cu',
    protons: 29,
    neutrons: 35,
    electrons: 29,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Zinc',
    symbol: 'Zn',
    protons: 30,
    neutrons: 35,
    electrons: 30,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Gallium',
    symbol: 'Ga',
    protons: 31,
    neutrons: 39,
    electrons: 31,
    group: groups.otherMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Germanium',
    symbol: 'Ge',
    protons: 32,
    neutrons: 41,
    electrons: 32,
    group: groups.metalloid,
    metalType: metalTypes.metalloid,
  },
  {
    elementName: 'Arsenic',
    symbol: 'As',
    protons: 33,
    neutrons: 42,
    electrons: 33,
    group: groups.metalloid,
    metalType: metalTypes.metalloid,
  },
  {
    elementName: 'Selenium',
    symbol: 'Se',
    protons: 34,
    neutrons: 35,
    electrons: 34,
    group: groups.otherNonMetal,
    metalType: metalTypes.nonMetal,
  },
  {
    elementName: 'Bromine',
    symbol: 'Br',
    protons: 35,
    neutrons: 45,
    electrons: 35,
    group: groups.halogen,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 7,
  },
  {
    elementName: 'Krypton',
    symbol: 'Kr',
    protons: 36,
    neutrons: 48,
    electrons: 36,
    group: groups.nobleGas,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 8,
  },
  {
    elementName: 'Rubidium',
    symbol: 'Rb',
    protons: 37,
    neutrons: 47,
    electrons: 37,
    group: groups.alkaliMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Strontium',
    symbol: 'Sr',
    protons: 38,
    neutrons: 50,
    electrons: 38,
    group: groups.alkalineEarthMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  // Additional
  {
    elementName: 'Zirconium',
    symbol: 'Zr',
    protons: 40,
    neutrons: 51,
    electrons: 40,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Silver',
    symbol: 'Ag',
    protons: 47,
    neutrons: 61,
    electrons: 47,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Tin',
    symbol: 'Sn',
    protons: 50,
    neutrons: 69,
    electrons: 50,
    group: groups.otherMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Iodine',
    symbol: 'I',
    protons: 53,
    neutrons: 74,
    electrons: 53,
    group: groups.halogen,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 7,
  },
  {
    elementName: 'Xenon',
    symbol: 'Xe',
    protons: 54,
    neutrons: 77,
    electrons: 54,
    group: groups.nobleGas,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 8,
  },
  {
    elementName: 'Cesium',
    symbol: 'Cs',
    protons: 55,
    neutrons: 78,
    electrons: 55,
    group: groups.alkaliMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Barium',
    symbol: 'Ba',
    protons: 56,
    neutrons: 81,
    electrons: 56,
    group: groups.alkalineEarthMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Tungsten',
    symbol: 'W',
    protons: 74,
    neutrons: 110,
    electrons: 74,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Platinum',
    symbol: 'Pt',
    protons: 78,
    neutrons: 117,
    electrons: 78,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Gold',
    symbol: 'Au',
    protons: 79,
    neutrons: 118,
    electrons: 79,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Mercury',
    symbol: 'Hg',
    protons: 80,
    neutrons: 121,
    electrons: 80,
    group: groups.transitionMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Lead',
    symbol: 'Pb',
    protons: 82,
    neutrons: 125,
    electrons: 82,
    group: groups.otherMetal,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Radon',
    symbol: 'Rn',
    protons: 86,
    neutrons: 136,
    electrons: 86,
    group: groups.nobleGas,
    metalType: metalTypes.nonMetal,
    valenceElectrons: 8,
  },
  {
    elementName: 'Francium',
    symbol: 'Fr',
    protons: 87,
    neutrons: 136,
    electrons: 87,
    group: groups.alkaliMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 1,
  },
  {
    elementName: 'Radium',
    symbol: 'Ra',
    protons: 88,
    neutrons: 138,
    electrons: 88,
    group: groups.alkalineEarthMetal,
    metalType: metalTypes.metal,
    valenceElectrons: 2,
  },
  {
    elementName: 'Lanthanum',
    symbol: 'La',
    protons: 57,
    neutrons: 82,
    electrons: 57,
    group: groups.lanthanide,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Neodymium',
    symbol: 'Nd',
    protons: 60,
    neutrons: 84,
    electrons: 60,
    group: groups.lanthanide,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Europium',
    symbol: 'Eu',
    protons: 63,
    neutrons: 89,
    electrons: 63,
    group: groups.lanthanide,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Actinium',
    symbol: 'Ac',
    protons: 89,
    neutrons: 138,
    electrons: 89,
    group: groups.actinide,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Uranium',
    symbol: 'U',
    protons: 92,
    neutrons: 146,
    electrons: 92,
    group: groups.actinide,
    metalType: metalTypes.metal,
  },
  {
    elementName: 'Plutonium',
    symbol: 'Pu',
    protons: 94,
    neutrons: 150,
    electrons: 94,
    group: groups.actinide,
    metalType: metalTypes.metal,
  },
];

const elements1To20 = allElements.filter(e => (e.protons >= 1 && e.protons <= 20));
const elements21To38 = allElements.filter(e => (e.protons >= 21 && e.protons <= 38));
const elementsAdditional = allElements.filter(e => e.protons > 38);

module.exports = {
  allElements,
  elements1To20,
  elements21To38,
  elementsAdditional,
};
