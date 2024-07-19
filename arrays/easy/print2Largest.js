// Second Largest

/*
Given an array arr, return the second largest distinct element from an array. 
If the second largest element doesn't exist then return -1.

*/

// SOLUTION-1: Time complexity - O(n) and Aux Space complexity - O(1)

const print2largest = function (arr) {
  if (arr.length < 2) {
    return -1;
  }

  let max = 0;
  let secondMax = -1;

  if (arr[0] < arr[1]) {
    max = arr[1];
    secondMax = arr[0];
  } else if (arr[0] > arr[1]) {
    max = arr[0];
    secondMax = arr[1];
  }

  for (let i = 2; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
    } else if (secondMax < arr[i] && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
};

// TESTING

console.log(print2largest([12, 35, 1, 10, 34, 1])); // 34
console.log(print2largest([10, 10])); // -1
console.log(print2largest([10])); // -1
console.log(print2largest([10, 5, 10])); // 5
