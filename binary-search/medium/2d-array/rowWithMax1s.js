/*
You are given a 2D binary array arr[][] consisting of only 1s and 0s. Each row of the array is sorted in non-decreasing order. Your task is to find and return the index of the first row that contains the maximum number of 1s. If no such row exists, return -1.

Note:

The array follows 0-based indexing.
The number of rows and columns in the array are denoted by n and m respectively.


Examples:

Input: arr[][] = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
Output: 2
Explanation: Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.

Input: arr[][] = [[0,0], [1,1]]
Output: 1
Explanation: Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.

Input: arr[][] = [[0,0], [0,0]]
Output: -1
Explanation: No row contains any 1s, so the output is -1.
*/

// BRUTE FORCE --- TIME COMPLEXITY => O(N*M) & AUX SPACE COMPLEXITY => O(1)

/*
function rowWithMax1s(arr) {
  const r = arr.length;
  const c = arr[0].length;
  let result = -1;
  let max = 0;

  for (let i = 0; i < r; i++) {
    let count = 0;
    for (let j = 0; j < c; j++) {
      if (arr[i][j]) count++;
    }

    if (count === c) {
      return i;
    }

    if (count > max) {
      result = i;
      max = count;
    }
  }

  return result;
}
*/

// ============================================================================

// USING BINARY SEARCH --- TIME COMPLEXITY => O(N*log(M)) 

// Fnding pivot index of binary sorted array.
function pivot(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === 1) {
      if (nums[mid - 1] === 0) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid + 1] === 1) {
        return mid + 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[0] === 1 ? 0 : n;
}

function rowWithMax1s(arr) {
  const r = arr.length;
  const c = arr[0].length;
  let result = -1;
  let max = 0;

  for (let i = 0; i < r; i++) {
    const pivotIndex = pivot(arr[i]);

    const count = c - pivotIndex;

    if (count === c) {
      return i;
    }

    if (count > max) {
      result = i;
      max = count;
    }
  }

  return result;
}

// TESTING

console.log(
  rowWithMax1s([
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ])
);

console.log(
  rowWithMax1s([
    [0, 0],
    [1, 1],
  ])
);

console.log(
  rowWithMax1s([
    [0, 0],
    [0, 0],
  ])
);
