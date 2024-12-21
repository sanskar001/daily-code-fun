/*
81. Search in Rotated Sorted Array II

There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.

 

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
*/

// BRUTE FORCE SOLUTION --- LINEAR SEARCH --- TIME COMPLEXITY => O(N) AND AUX SPACE COMPEXITY => O(1)

// ========================================================

// OPTIMAL SOLUTION --- FINDING PIVOT AND BINARY SEARCH --- TIME COMPLEXITY => O(logn) AND SPACE COMPLEXITY => O(1)

const search = function (nums, target) {
  const n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //if mid points the target
    if (nums[mid] === target) return true;

    //Edge case:
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    //if left part is sorted:
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        //element exists:
        high = mid - 1;
      } else {
        //element does not exist:
        low = mid + 1;
      }
    } else {
      //if right part is sorted:
      if (nums[mid] <= target && target <= nums[high]) {
        //element exists:
        low = mid + 1;
      } else {
        //element does not exist:
        high = mid - 1;
      }
    }
  }
  return false;
};

// TESTING

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([1, 0, 1, 1, 1], 0));
