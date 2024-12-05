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

// TIME COMPLEXITY - O(N) & AUX SPACE COMPLEXITY - O(N)

/*


const check = function (nums) {
  const size = nums.length;

  if (check <= 1) {
    return true;
  }

  const findPivot = function (nums) {
    for (let i = 0; i < size - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return i;
      }
    }

    return size - 1;
  };

  const pivotIndex = findPivot(nums);

  if (pivotIndex === size - 1) {
    return true;
  }

  const mergedArr = [
    ...nums.slice(pivotIndex + 1),
    ...nums.slice(0, pivotIndex + 1),
  ];

  for (let i = 0; i < size - 1; i++) {
    if (mergedArr[i] > mergedArr[i + 1]) {
      return false;
    }
  }

  return true;
};

*/

// ====================================================================

const check = function (nums) {
  let pivotCount = 0;
  const size = nums.length;

  for (let i = 0; i < size - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      pivotCount++;
    }
  }

  if (nums[size - 1] > nums[0]) {
    pivotCount++;
  }

  return pivotCount < 2;
};

// TESTING

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));
console.log(check([3, 2, 1]));
