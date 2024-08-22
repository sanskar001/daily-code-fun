// Longest Consecutive Sequence

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// SOLUTION-1 ---- TIME => O(N LOG N) & AUX SPACE => O(1)

// var longestConsecutive = function (nums) {
//   // Sort array in ascending order
//   nums.sort((a, b) => a - b);

//   let maxLen = 0;
//   let len = 0;
//   const n = nums.length;

//   // Increment "len" by checking consecutive elements in array
//   for (let i = 0; i < n; i++) {
//     if (nums[i + 1] > nums[i] && nums[i + 1] - nums[i] === 1) {
//       len++;
//     } else if (nums[i + 1] === nums[i]) {
//       continue;
//     } else {
//       len = 0;
//     }
//     maxLen = Math.max(len + 1, maxLen);
//   }

//   return maxLen;
// };

// ==============================================================

// USING SET DATASTRUCTURE --- TIME => O(N) & AUX SPACE => O(N)

var longestConsecutive = function (nums) {
  let count = 0;
  let maxCount = 0;

  // Convert array into set
  const numSet = new Set(nums);

  for (let val of numSet) {
    if (!numSet.has(val - 1)) {
      count = 1;
      let x = val + 1;
      while (numSet.has(x)) {
        count++;
        x++;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};

// TESTING

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([0])); // 1
