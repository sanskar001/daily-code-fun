/*
414. Third Maximum Number
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/

// SOLUTION-1 TIME COMPLEXITY => nLong(n) and SPACE COMPLEXITY => o(n)
/*
var thirdMax = function (nums) {
  const uniqueNums = Array.from(new Set(nums));

  uniqueNums.sort((a, b) => a - b);

  const n = uniqueNums.length;
  return uniqueNums[n - 3] ?? uniqueNums[n - 1];
};
*/

//SOLUTION - TIME COMPLEXITY => nlog(n).

var thirdMax = function (nums) {
  const n = nums.length;

  if (n < 3) {
    return Math.max(...nums);
  }

  nums.sort((a, b) => b - a);
  let j = 0;
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[j]) {
      j = i;
      count++;
    }

    if (count === 2) {
      return nums[j];
    }
  }

  return nums[0];
};

// TESTING

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
