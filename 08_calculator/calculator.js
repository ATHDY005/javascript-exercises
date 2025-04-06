const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...args) {
  let arrelements = args[0];
  let sum = 0;
  if (arrelements.length === 0) return 0;
  for (let element of arrelements) {
    sum += element;
  }
  return sum;
};

const multiply = function (...args) {
  let arrelements = args[0];
  let product = 1;
  for (let element of arrelements) {
    product *= element;
  }
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
