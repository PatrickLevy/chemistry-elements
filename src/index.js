const elements = require('./elements.js');
const groups = require('./groups.js');
const methods = require('./methods.js');
const util = require('./util.js');

module.exports = {
  ...elements,
  ...groups,
  ...methods,
  ...util,
};
