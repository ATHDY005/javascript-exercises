const fibonacci = function (input) {
  let oldest = 0;
  let old = 1;
  let newInput = Number(input);
  let fibbo;
  if (newInput === 0) return 0;
  if (newInput === 1) return 1;
  if (newInput < 0) return 'OOPS';
  for (let i = 2; i <= newInput; i++) {
    fibbo = oldest + old;
    oldest = old;
    old = fibbo;
  }
  return fibbo;
};

// Do not edit below this line
module.exports = fibonacci;
