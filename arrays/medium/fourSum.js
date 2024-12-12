/*
18. 4Sum

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n

a, b, c, and d are distinct.

nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

*/

// MY SOLUTION

// THREE SUM SOLUTION - O(N^2)

const threeSum = function (arr, target) {
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    // Remove duplicates
    if (i !== 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    const k = target - arr[i];

    // Find unique pair with sum as "k" in sorted array.
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum < k) {
        left++;
      } else if (sum > k) {
        right--;
      } else {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        // Removing duplicates
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        // Removing duplicates
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
};

// ----------------------------------------------------------------------

// SOLUTION - USING THREE SUM APPROACH - O(N^3)

var fourSum = function (nums, target) {
  const size = nums.length;
  const result = [];

  // Sort nums array in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < size; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const tripletTarget = target - nums[i];

    const tripletResult = threeSum(nums.slice(i + 1), tripletTarget);

    // Parse triplet with sum "tripletTarget" and push into result
    tripletResult.forEach((triplet) => {
      result.push([nums[i], ...triplet]);
    });
  }

  return result;
};

// TESTING

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
