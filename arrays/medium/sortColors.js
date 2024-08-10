// Sort Colors

/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.


Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

// SOLUTION-1 --- USING FREQUENCY COUNT --- TIME => O(N) & SPACE => O(1)

var sortColors = function (nums) {
  const freqCount = new Array(3).fill(0);

  for (let i = 0; i < nums.length; i++) {
    freqCount[nums[i]]++;
  }

  for (let j = 0, k = 0; j < nums.length; ) {
    if (!freqCount[k]) {
      k++;
      continue;
    }
    nums[j] = k;
    freqCount[k]--;
    j++;
  }

  return nums;
};

// TESTING

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([2]));
