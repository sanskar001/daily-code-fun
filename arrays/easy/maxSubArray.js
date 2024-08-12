// Maximum Subarray

/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

// SOLUTION-1 ---- TIME => O(N^2) & AUX SPACE => O(1)

// var maxSubArray = function (nums) {
//   const n = nums.length;
//   let sum;
//   let maxSum = nums[0];

//   for (let i = 0; i < n; i++) {
//     sum = nums[i];
//     for (let j = i + 1; j < n; j++) {
//       maxSum = Math.max(sum, maxSum);
//       sum += nums[j];
//     }
//     maxSum = Math.max(sum, maxSum);
//   }

//   return maxSum;
// };

///////////////////////////////////////////////////////////////////////

// SOLUTION-2 ---- TIME => O(N) & AUX SPACE => O(1)
// KADANE'S ALGO

var maxSubArray = function (nums) {
  const n = nums.length;
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < n; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

// TESTING

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-1, 0, -2])); // 0
