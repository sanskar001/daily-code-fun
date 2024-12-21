/*
33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

*/

// BRUTE FORCE SOLUTION --- LINEAR SEARCH --- TIME COMPLEXITY => O(N) AND AUX SPACE COMPEXITY => O(1)

// ========================================================

// OPTIMAL SOLUTION --- FINDING PIVOT AND BINARY SEARCH --- TIME COMPLEXITY => O(logn) AND SPACE COMPLEXITY => O(1)

const binarySearch = function (nums, target, start = 0, end = nums.length - 1) {
  let left = start;
  let right = end;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

/*
const pivot = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return i;
    }
  }

  return 0;
};
*/

// TIME COMPLEXITY => O(logn)

const pivot = function (nums) {
  const n = nums.length;

  let left = 0;
  let right = n - 1;

  if (nums[left] < nums[right]) return 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid - 1]) {
      return mid;
    }

    if (nums[0] > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0;
};

var search = function (nums, target) {
  const n = nums.length;

  const pivotIndex = pivot(nums);

  if (pivotIndex === 0) {
    return binarySearch(nums, target);
  }

  if (target >= nums[0]) {
    return binarySearch(nums, target, 0, pivotIndex - 1);
  } else {
    return binarySearch(nums, target, pivotIndex, n - 1);
  }
};

// TESTING

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 1));
