const sumAll = function (a, b) {
  let sum = 0;

  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  )
    return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';

  let start = Math.min(a, b);
  let end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
