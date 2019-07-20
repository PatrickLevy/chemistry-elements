function getRandomIntInclusive(mn, mx) {
  const min = Math.ceil(mn);
  const max = Math.floor(mx);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

module.exports = {
  getRandomIntInclusive,
};
