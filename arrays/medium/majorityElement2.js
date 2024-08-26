//  Majority Element II

/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
*/

// SOLUTION-1 ---- TIME => O(N) & AUX SPACE => O(N)
// USING HASHING

// var majorityElement = function (nums) {
//   const result = [];
//   const memory = {};
//   const n = nums.length;
//   const target = n / 3;

//   for (let i = 0; i < n; i++) {
//     memory[nums[i]] = (memory[nums[i]] || 0) + 1;
//   }

//   for (let key in memory) {
//     if (memory[key] > target) {
//       result.push(+key);
//     }
//   }

//   return result;
// };

// ====================================================

// SOLUTION-2 ---- TIME => O(N LOGN) & AUX SPACE => O(1)
// USING SORTING AND COUNT ELEMENTS WITH TRAVERSING

// TESTING

console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1, 2, 2, 3, 2])); // [2]
console.log(majorityElement([11, 33, 33, 11, 33, 11])); // [11, 33]
