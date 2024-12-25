/*
1539. Kth Missing Positive Number

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/

// BRUTE SOLUTION => TIME COMPLEXITY => O(N + K) & AUX SPACE COMPLEXITY => O(1)

/*
var findKthPositive = function (arr, k) {
  const n = arr.length;
  let i = 0;
  let j = 0;
  let p = 0;
  let val = 1;

  while (j < k && i < n + k) {
    if (val !== arr[p]) {
      j++;
    } else {
      p++;
    }
    val++;
    i++;
  }

  return val - 1;
};
*/

// =======================================================

// BEST SOLUTION => TIME COMPLEXTITY => O(N)

/*
var findKthPositive = function (arr, k) {
  const n = arr.length;
  let count = 0;
  let i = 0;

  while (count < k && i < n) {
    const missing = arr[i] - (arr[i - 1] || 0) - 1;
    count += missing;

    if (count >= k) {
      return arr[i] - (count - k) - 1;
    }

    i++;
  }

  return arr[i - 1] + (k - count);
};
*/

// =============================================================

// TIME COMPLEXITY => O(logn)

var findKthPositive = function (arr, k) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const missing = arr[mid] - (mid + 1);

    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return k + right + 1;
};

// TESTING
console.log(findKthPositive([2, 3, 4, 7, 11], 2));
console.log(findKthPositive([1, 2, 3, 4], 2));
console.log(findKthPositive([2], 1));
