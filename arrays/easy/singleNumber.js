// Single Number

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

/*

SOLUTION-1

Using extra space map in which we can store frequency of elements in array.

Then we can check unique element.

TIME => O(N) & AUX SPACE => O(N)

//////////////////////////////////////////////////////////

SOLUTION-2

Sort array in ascending order then find unique elements in array, then take sum total of unique element.

((Sum of all unique element) * 2 ) - (Sum of element in array) => result;

TIME => O(n logn) & AUX SPACE => O(1)


*/

// SOLUTION-3 --- TIME => O(N) & AUX SPACE => O(1)
// Using XOR operation

/*
Assume the given array is: [4,1,2,1,2]
XOR of all elements = 4^1^2^1^2
      = 4 ^ (1^1) ^ (2^2)
      = 4 ^ 0 ^ 0 = 4^0 = 4
Hence, 4 is the single element in the array.
*/

var singleNumber = function (nums) {
  const result = nums.reduce((acc, val) => acc ^ val, 0);

  return result;
};

//  TESTING

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
