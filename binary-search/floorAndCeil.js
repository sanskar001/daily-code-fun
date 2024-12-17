/*
Floor and Ceil in Sorted Array

Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
The floor of x is the largest element in the array which is smaller than or equal to x.
The ceiling of x is the smallest element in the array greater than or equal to x.

Pre-requisite: Lower Bound & Binary Search

Example 1:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
Result: 4 7
Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

Example 2:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
Result: 8 8
Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.
*/

// BRUTE FORCE SOLUTION --- O(N)

/*
const floorAndCeil = function (nums, x) {
  const n = nums.length;
  let floor = -1;
  let ceil = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] >= x && ceil < 0) {
      ceil = nums[i];
    }

    if (nums[i] <= x) {
      floor = nums[i];
    }
  }

  return [floor, ceil];
};
*/

const floorAndCeil = function (nums, x) {
  const n = nums.length;
  let floor = -1;
  let ceil = -1;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === x) {
      ceil = nums[mid];
      floor = nums[mid];
      break;
    } else if (nums[mid] > x) {
      ceil = nums[mid];
      right = mid - 1;
    } else {
      floor = nums[mid];
      left = mid + 1;
    }
  }

  return [floor, ceil];
};

// TESTING

console.log(floorAndCeil([3, 4, 4, 7, 8, 10], 5));
console.log(floorAndCeil([3, 4, 4, 7, 8, 10], 8));
console.log(floorAndCeil([3, 4, 4, 7, 8, 10], 11));
console.log(floorAndCeil([3, 4, 4, 7, 8, 10], 1));
