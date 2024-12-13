// Count the number of subarrays with given xor K

/*
Problem Statement: Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to k.

Example 1:
Input Format: A = [4, 2, 2, 6, 4] , k = 6
Result:4
Explanation: The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

Example 2:
Input Format: A = [5, 6, 7, 8, 9], k = 5
Result: 2
Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]
*/

// SOLUTION - TIME COMPLEXITY = > O(N) & AUX SPACE COMPLEXITY => O(N)

// APPROACH => SAME AS COUNT SUBARRAY WITH SUM "k"

const subarrayXor = function (nums, k) {
  const n = nums.length;
  const memory = {};
  let count = 0;
  let prefixSum = 0;

  memory[0] = 1;

  for (let i = 0; i < n; i++) {
    prefixSum ^= nums[i];

    const remainSum = prefixSum ^ k;

    count += memory[remainSum] || 0;

    memory[prefixSum] = (memory[prefixSum] || 0) + 1;
  }

  return count;
};

// TESTING

console.log(subarrayXor([4, 2, 2, 6, 4], 6)); // 4
console.log(subarrayXor([5, 6, 7, 8, 9], 5)); // 2
