// Max Consecutive Ones

/*
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
  const n = nums.length;
  let count = 0;
  let max = 0;
  let flag = true;

  for (let i = 0; i < n; i++) {
    flag = flag && nums[i];

    if (flag) {
      count += flag;
    } else {
      count = 0;
      flag = true;
    }

    max = Math.max(max, count);
  }

  return max;
};

// TESTING

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
