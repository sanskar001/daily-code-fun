/*
Implement Lower Bound

Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

Pre-requisite: Binary Search algorithm

Examples

Example 1:

Input Format:N = 4, arr[] = {1,2,2,3}, x = 2
Result:1
Explanation:Index 1 is the smallest index such that arr[1] >= x.


Example 2:

Input Format:N = 5, arr[] = {3,5,8,15,19}, x = 9
Result:3
Explanation:Index 3 is the smallest index such that arr[3] >= x.
*/

// BRUTE FORCE SOLUTION -- LINEAR SEARCH --- TIME COMPLEXITY => O(N)

/*
const searchLowerBound = function (nums, x) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] >= x) {
      return i;
    }
  }

  return -1;
};
*/

// ========================================================

// OPTIMAL SOLUTION => USING BINARY SEARCH

const searchLowerBound = function (nums, x) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= x) {
      right = mid - 1;
      result = mid;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

// TESTING

console.log(searchLowerBound([1, 2, 2, 3], 2));
console.log(searchLowerBound([3, 5, 8, 15, 19], 9));
console.log(searchLowerBound([1, 3, 5, 7, 9, 11, 13, 15, 17], 12));
