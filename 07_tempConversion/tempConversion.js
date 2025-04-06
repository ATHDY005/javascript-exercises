const convertToCelsius = function (f) {
  const c = (5 / 9) * (f - 32);
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function (c) {
  const f = (9 / 5) * c + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
