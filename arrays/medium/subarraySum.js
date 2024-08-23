// Subarray Sum Equals K

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/

// Solution-1 ---- TIME => O(N^2) & AUX SPACE => O(1)

// var subarraySum = function (nums, k) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

//=============================================================

// SOLUTION-2 ---------- TIME => O(N) & AUX SPACE => O(N)

var subarraySum = function (nums, k) {
  let count = 0;
  let memory = {};
  let prefixSum = 0;
  const n = nums.length;

  memory[0] = 1;

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];

    const remainSum = prefixSum - k;

    count += memory[remainSum] || 0;

    memory[prefixSum] = (memory[prefixSum] || 0) + 1;
  }

  return count;
};

// TESTING

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, -1, 0], 0)); // 3
console.log(subarraySum([6, 4, 3, 1], 10)); // 1
