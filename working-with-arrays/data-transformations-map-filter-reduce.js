"use strict";

// Data transformations : .map .filter .reduce, all 3 methods returning a new array
// .map
const arr = [2, 1, 5, 12];
arr.map(function (num) {
  console.log(num * 2);
});

// .filter
const arr2 = [3, 1, 4, 3, 2];
console.log(
  // returning an array only with numbers above 2
  arr2.filter(function (arr) {
    return arr > 2;
  })
);

// .reduce
console.log(
  // sum of all elements in the array into one value = total sum of all numbers in array
  arr.reduce(function (acc, val) {
    return acc + val;
  })
);
