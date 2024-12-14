/*
Find the repeating and missing numbers

Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

A - Repeating
B - Missing

Examples

Example 1:
Input Format :  array[] = {3,1,2,5,3}
Result: {3,4)
Explanation: A = 3 , B = 4 
Since 3 is appearing twice and 4 is missing

Example 2:
Input Format: array[] = {3,1,2,5,4,6,7,5}
Result: {5,8)
Explanation: A = 5 , B = 8 
Since 5 is appearing twice and 8 is missing
*/

// SOLUTION-1 => using frequency counter or hashmap
// TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(N)

/*
const findRepeatAndMissingItems = (nums) => {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;
  const freq = {};
  let total = 0;
  const result = { repeat: null, missing: null };

  for (let i = 0; i < n; i++) {
    if (freq.hasOwnProperty(nums[i])) {
      result.repeat = nums[i];
    }
    freq[nums[i]] = i;
    total += nums[i];
  }

  result.missing = sum - total + result.repeat;

  return result;
};
*/

// NOTE: SAME WE CAN DO WITH THE HELP OF SET DATA STRUCTURE.

// ===========================================

// SOLUTION-1 => using mathematics
// TIME COMPLEXITY => O(N)

const findRepeatAndMissingItems = (nums) => {
  const n = nums.length;
  let repeating = null; // r
  let missing = null; // m

  // STEP1: Calculating sum and sum of square of n natural numbers.
  const sum = (n * (n + 1)) / 2;
  const sumOfSquare = (n * (n + 1) * (2 * n + 1)) / 6;

  // STEP2: Calculating sum and sum of square of items in array
  let total = 0;
  let squareTotal = 0;

  for (let i = 0; i < n; i++) {
    total += nums[i];
    squareTotal += nums[i] ** 2;
  }

  // STEP3: total - sum = r - m;
  const diff = total - sum;

  // STEP4: squareTotal - sumOfSquare = r^2 - m^2 => (r-m)*(r+m)
  const squareDiff = squareTotal - sumOfSquare;

  // STEP5: (r-m)*(r+m) / (r-m) => r + m
  const temp = squareDiff / diff;

  // STEP6: Solve two equations r - m = diff and r + m = temp;
  repeating = (diff + temp) / 2;
  missing = temp - repeating;

  return { repeating, missing };
};

// TESTING

console.log(findRepeatAndMissingItems([3, 1, 2, 5, 3]));
console.log(findRepeatAndMissingItems([3, 1, 2, 5, 4, 6, 7, 5]));
