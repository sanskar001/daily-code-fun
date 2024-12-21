/*
540. Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10

*/

// BRUTE FORCE --- USING FREQUENCY COUNTER --- TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(N)

// ==================================================================================================

// BEST SOLUTION --- USING XOR OPERATOR --- TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(1)

/*
var singleNonDuplicate = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};
*/

// ==================================================================================================

var singleNonDuplicate = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === nums[mid - 1]) {
      // check left side subarray has even length
      if ((mid - 1) % 2 === 0) {
        // Shift to right subarray
        left = mid + 1;
      } else {
        // Otherwise shift to left subarray
        right = mid - 2;
      }
    } else if (nums[mid] === nums[mid + 1]) {
      // check right side subarray has even length
      if ((n - mid) % 2 === 0) {
        // Shift to left subarray
        right = mid - 1;
      } else {
        // Otherwise shift to right subarray
        left = mid + 2;
      }
    } else {
      // Otherwise nothing matches it means mid is single number.
      return nums[mid];
    }
  }
};

// TESTING

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
