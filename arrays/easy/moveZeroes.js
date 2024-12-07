// Move all Zeros to the end of the array

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this "in-place" without making a copy of the array.


Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

// SOLUTION-1 USING EXTRA SPACE --- TIME => O(N) & AUX SPACE => O(N)

// var moveZeroes = function (nums) {
//   const result = [];
//   let zeroCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       result.push(nums[i]);
//     } else {
//       zeroCount++;
//     }
//   }

//   for (let c = 0; c < zeroCount; c++) {
//     result.push(0);
//   }

//   return result;
// };

// SOLUTION-2 USING IN-PLACE APPROACH OR TWO POINTER APPROACH --- TIME => O(N) & AUX SPACE => O(1)

// var moveZeroes = function (nums) {
//   let i = 0;
//   let n = nums.length;
//   let zeroCount = 0;

//   for (let j = 0; j < n; j++) {
//     if (nums[j] === 0) {
//       zeroCount++;
//     } else {
//       nums[i] = nums[j];
//       i++;
//     }
//   }

//   for (let z = 0; z < zeroCount; z++) {
//     nums[z + i] = 0;
//   }

//   console.log(nums);
// };

// OPTIMAL SOLUTION --- TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(1)

var moveZeroes = function (nums) {
  const size = nums.length;
  let i = 0;
  let j = 0;

  while (i < size && j < size) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }

  return nums;
};

// TESTING

console.log(moveZeroes([0, 1, 0, 3, 12]));
