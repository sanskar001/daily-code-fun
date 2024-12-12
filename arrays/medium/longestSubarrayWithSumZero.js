/*
Length of the longest subarray with zero Sum

Problem Statement: Given an array containing both positive and negative integers, we have to find the length of the 
longest subarray with the sum of all elements equal to zero.

Examples

Example 1:
Input Format: N = 6, array[] = {9, -3, 3, -1, 6, -5}
Result: 5
Explanation
: The following subarrays sum to zero:
{-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
Since we require the length of the longest subarray, our answer is 5!

Example 2:
Input Format: N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
Result : 8
Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
Length of longest subarray = 8

Example 3:
Input Format: N = 3, array[] = {1, 0, -5}
Result: 1
Subarray : {0}
Length of longest subarray = 1

Example 4:
Input Format:N = 5, array[] = {1, 3, -5, 6, -2}
Result: 0
Subarray: There is no subarray that sums to zero
*/

// BRUTE FORCE SOLUTION - TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(1)

/*
const longestSubarrayWithSumZero = function (nums) {
  const n = nums.length;
  let len = 0;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === 0) {
        len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      }
    }
  }

  return maxLen;
};
*/

// ==========================================================

// SOLUTION - TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(N)

const longestSubarrayWithSumZero = function (nums) {
  const n = nums.length;
  const memory = {};
  let prefixSum = 0;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];

    if (prefixSum === 0) {
      maxLen = i + 1;
    }

    if (memory.hasOwnProperty(prefixSum)) {
      maxLen = Math.max(maxLen, i - memory[prefixSum]);
    } else {
      memory[prefixSum] = i;
    }
  }

  return maxLen;
};

// TESTING

console.log(longestSubarrayWithSumZero([9, -3, 3, -1, 6, -5])); // 5
console.log(longestSubarrayWithSumZero([6, -2, 2, -8, 1, 7, 4, -10])); // 8
console.log(longestSubarrayWithSumZero([1, 0, -5])); // 1
console.log(longestSubarrayWithSumZero([1, 3, -5, 6, -2])); // 0
