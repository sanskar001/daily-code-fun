/*
15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

// BRUTE FORCE APPRORACH ---- TIME LIMIT EXCEED - O(N^3)

/*
var threeSum = function (nums) {
  let result = [];
  const n = nums.length;

  // check all possible triplets:
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]];
          triplet.sort((a, b) => a - b);
          result.push(triplet);
        }
      }
    }
  }

  //store the set in the answer:
  const set = new Set(result.map(JSON.stringify));
  result = Array.from(set).map(JSON.parse);
  return result;
};
*/

// =================================================================

// BEST APPORACH WITH 2 LOOPS --- O(N^2) -- USING 2 SUM APPROACH BEANEATH THIS

// STILL TIME EXCEEDS

/*
var threeSum = function (nums) {
  const n = nums.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    const hashset = new Set();

    for (let j = i + 1; j < n; j++) {
      //Calculate the 3rd element:
      const third = 0 - (nums[i] + nums[j]);

      //Find the element in the set by using 2-SUM approach
      if (hashset.has(third)) {
        const triplet = [nums[i], nums[j], third];
        triplet.sort((a, b) => a - b);
        result.push(triplet);
      }
      hashset.add(nums[j]);
    }
  }

  //store the set in the result:
  let set = new Set(result.map(JSON.stringify));
  result = Array.from(set).map(JSON.parse);
  return result;
};
*/

// ========================================================================

// OPTIMAL SOLUTION ----- O(N^2)

// var threeSum = function (nums) {
//   let result = [];
//   const n = nums.length;

//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < n; i++) {
//     // remove duplicates:
//     if (i !== 0 && nums[i] === nums[i - 1]) continue;

//     // moving 2 pointers:
//     let j = i + 1;
//     let k = n - 1;
//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];
//       if (sum < 0) {
//         j++;
//       } else if (sum > 0) {
//         k--;
//       } else {
//         let temp = [nums[i], nums[j], nums[k]];
//         result.push(temp);
//         j++;
//         k--;
//         // skip the duplicates:
//         while (j < k && nums[j] === nums[j - 1]) j++;
//         while (j < k && nums[k] === nums[k + 1]) k--;
//       }
//     }
//   }
//   return result;
// };

// ========================================================================================

// MY SOLUTION

var threeSum = function (nums) {
  const n = nums.length;
  const result = [];

  // Sort nums in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    // Remove duplicate
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const target = 0 - nums[i];

    // Find unique pair with sum as "target" in sorted array.
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Removing duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
};

// TESTING

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
