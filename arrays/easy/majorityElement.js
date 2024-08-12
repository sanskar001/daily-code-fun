// Majority Element

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

// SOLUTION-1 --- USING SORTING AND THEN FINDING MOST RECURRING ELEMENTS --- TIME => O(n logn) & AUX SPACE => O(1)

// SOLUTION-2 --- USING HASHING --- TIME => O(N) & SPACE => O(N)

// var majorityElement = function (nums) {
//   const memory = {};
//   const n = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     memory[nums[i]] = (memory[nums[i]] || 0) + 1;
//   }

//   for (let key in memory) {
//     if (memory[key] >= n / 2) {
//       return key;
//     }
//   }

//   return -1;
// };

//////////////////////////////////////////////////////////

// SOLUTION-2 --- USING HASHING --- TIME => O(N) & SPACE => O(N)

var majorityElement = function (nums) {
  // Size of the given array
  let n = nums.length;
  let cnt = 0; // Count
  let el; // Element

  // Applying the algorithm
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = nums[i];
    } else if (el === nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  // Checking if the stored element is the majority element
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === el) {
      cnt1++;
    }
  }

  if (cnt1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
};

// TESTING

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
