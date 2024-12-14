/*
493. Reverse Pairs

Given an integer array nums, return the number of reverse pairs in the array.

A reverse pair is a pair (i, j) where:

0 <= i < j < nums.length and
nums[i] > 2 * nums[j].
 

Example 1:

Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1


Example 2:

Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
(2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1

*/

// SOLUTION-1
// TIME COMPLEXITY => O(N^2)

/*
var reversePairs = function (nums) {
  const n = nums.length;
  let count = 0;

  for (let i = n - 1; i > 0; i--) {
    const right = nums[i];

    for (let j = 0; j < i; j++) {
      const left = nums[j];
      if (left > right * 2) {
        count++;
      }
    }
  }

  return count;
};
*/

// SOLUTION USING MERGE SORT
// TIME COMPLEXITY => O(N-LOGN)

var reversePairs = function (nums) {
  let count = 0;

  function countPairs(arr1, arr2) {
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
      while (j < arr2.length && arr1[i] > arr2[j] * 2) {
        j++;
      }
      count += j;
    }
  }

  function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length || j < arr2.length) {
      if (!arr2[j] || arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    return result;
  }

  function mergeSort(arr) {
    if (arr.length == 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Adding count pair only here
    countPairs(left, right);

    return merge(left, right);
  }

  mergeSort(nums);

  return count;
};

// TESTING

console.log(reversePairs([1, 3, 2, 3, 1])); // 2
console.log(reversePairs([2, 4, 3, 5, 1])); // 3
