/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

// SOLUTION-1 => TIME COMPLEXITY => O(n)

/*
var searchRange = function (nums, target) {
  const n = nums.length;
  let first = -1;
  let last = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      if (first < 0) {
        first = i;
        last = i;
      } else {
        last = i;
      }
    }
  }

  return [first, last];
};
*/

// ========================================================================

// SOLUTION-2 ---- TIME COMPLEXITY => O(logn)

/*
const binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

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

var searchRange = function (nums, target) {
  let first = -1;
  let last = -1;

  const targetIndex = binarySearch(nums, target);

  first = targetIndex;
  last = targetIndex;

  while (nums[first] === nums[first - 1] && first > -1) {
    first--;
  }

  while (nums[last] === nums[last + 1] && last > -1) {
    last++;
  }

  return [first, last];
};
*/

// ===================================================================

// OPTIMAL SOLUTION ---  TIME COMPLEXITY => O(logn)

var searchRange = function (nums, target) {
  let first = -1;
  let last = -1;

  const binarySearch = function (nums, target, isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  first = binarySearch(nums, target, true);
  last = binarySearch(nums, target, false);

  return [first, last];
};

// TESTING

console.log(searchRange([5, 7, 7, 8, 8, 10, 11], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([6, 6], 6));
