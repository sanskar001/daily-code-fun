/*
485. Max Consecutive Ones

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
*/

var findMaxConsecutiveOnes = function (nums) {
  const size = nums.length;
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < size; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }

  maxCount = Math.max(count, maxCount);

  return maxCount;
};

// TESTING

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
