/*
152. Maximum Product Subarray

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

// SOLUTION --- TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(1)

var maxProduct = function (nums) {
  const n = nums.length;
  let product1 = nums[0]; // min product value
  let product2 = nums[0]; // max product value
  let maxProduct = nums[0]; // Resultant max product value

  for (let i = 1; i < n; i++) {
    let temp = Math.max(nums[i], product1 * nums[i], product2 * nums[i]);
    product2 = Math.min(nums[i], product1 * nums[i], product2 * nums[i]);
    product1 = temp;

    maxProduct = Math.max(maxProduct, product1);
  }

  return maxProduct;
};

// TESTING

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4]));
