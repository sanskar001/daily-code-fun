// Check if Array Is Sorted and Rotated

/*
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
*/

// Time complexity - O(N) and Aux Space complexity - O(1)

var check = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
  }

  return count <= 1;
};

// TESTING

console.log(check([])); // true
console.log(check([1, 2, 3])); // true
console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([5, 4, 3, 2, 1])); // false
console.log(check([2, 3, 5, 4])); // false
