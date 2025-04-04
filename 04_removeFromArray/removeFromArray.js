const removeFromArray = function (a, ...b) {
  return a.filter((element) => !b.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
