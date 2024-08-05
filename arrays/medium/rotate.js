// Rotate Array

/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

// SOLUTION-1, TIME => O(N^2) & AUX SPACE => O(1)

// var rotate = function (nums, k) {
//   const n = nums.length;
//   const rotateCount = k % n;

//   for (let r = 0; r < rotateCount; r++) {
//     let last = nums[n - 1];
//     let prev = nums[0];
//     let current;

//     for (let i = 1; i < n; i++) {
//       current = nums[i];
//       nums[i] = prev;
//       prev = current;
//     }

//     nums[0] = last;
//   }

//   console.log(nums);
// };

////////////////////////////////////////////////////////

// SOLUTION-2, TIME => O(N) & AUX SPACE => O(1)

var rotate = function (nums, k) {
  const n = nums.length;
  const r = k % n;

  function reverse(start, end) {
    let i = start;
    let j = end - 1;

    while (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  if (r > 0) {
    // Step1: Reverse whole array
    reverse(0, n);

    // Step2: Reverse first subarray
    reverse(0, r);

    // Step3: Reverse rest subarray
    reverse(r, n);
  }

  console.log(nums);
};

// TESTING

rotate([1, 2, 3, 4, 5, 6, 7], 3);
