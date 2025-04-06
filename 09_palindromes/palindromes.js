const reverseString = require('../03_reverseString/reverseString');

const palindromes = function (string) {
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let cleanedString = string
    .toLowerCase()
    .split('')
    .filter((elements) => alphanumeric.includes(elements))
    .join('');
  let reversed = cleanedString.split('').reverse().join('');
  return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
