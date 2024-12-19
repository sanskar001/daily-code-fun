/*
Count Occurrences in Sorted Array

Problem Statement: You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

Examples

Example 1:
Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
Output: 4
Explanation: 3 is occurring 4 times in 
the given array so it is our answer.

Example 2:
Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
Output: 5
Explanation: 2 is occurring 5 times in the given array so it is our answer.
*/

// SOLUTION-1 ---- TIME COMPLEXITY => O(N)

/*
const countFreq = function (arr, target) {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
};
*/

// =========================================

// SOLUTION-2 ---- TIME COMPLEXITY => O(logn)

// USING SAME SOLUTION OF FINDING FIRST AND LAST OCCURANCE OF TARGET VALUE IN SORTED ARRAY.

var countFreq = function (arr, target) {
  let first = -1;
  let last = -1;

  const binarySearch = function (arr, target, isFirst) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        result = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  first = binarySearch(arr, target, true);
  last = binarySearch(arr, target, false);

  return first < 0 ? 0 : last - first + 1;
};

// TESTING

console.log(countFreq([2, 2, 3, 3, 3, 3, 4], 4));
