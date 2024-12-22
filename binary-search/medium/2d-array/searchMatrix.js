/*
240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 

Example 1:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Example 2:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
*/

// BRUTE FORCE => TRAVERSE THROUGH EVERY ELEMENT AND CHECK => TIME COMPLEXITY => O(M*N)

// ===================================================================================

// OPTIMAL SOLUTION

const binarySearch = function (arr, target) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

var searchMatrix = function (matrix, target) {
  const r = matrix.length;
  const c = matrix[0].length;

  for (let i = 0; i < r; i++) {
    if (matrix[i][0] <= target && matrix[i][c - 1] >= target) {
      if (binarySearch(matrix[i], target)) {
        return true;
      } else {
        continue;
      }
    }
  }

  return false;
};

// TESTING

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
