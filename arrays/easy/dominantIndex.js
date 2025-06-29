/*
Largest Number At Least Twice of Others

You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.


Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
*/

var dominantIndex = function (nums) {
  let n = nums.length;

  let maxIndex = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  for (let j = 0; j < n; j++) {
    if (j !== maxIndex && nums[j] * 2 > max) {
      return -1;
    }
  }

  return maxIndex;
};

// TESTING

console.log(dominantIndex([3, 6, 1, 0]));
