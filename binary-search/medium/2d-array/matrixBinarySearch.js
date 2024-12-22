/*
74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

// BRUTE FORCE => TRAVERSE THROUGH EVERY ELEMENT AND CHECK => TIME COMPLEXITY => O(M*N)

// ===================================================================================

// OPTIMAL SOLUTION

// Find 2-d array indexes from 1-d position of array.
const findIndexes = function (arr, position) {
  const c = arr[0].length;
  const i = Math.floor(position / c);
  const j = position % c;

  return [i, j];
};

var searchMatrix = function (matrix, target) {
  const r = matrix.length;
  const c = matrix[0].length;

  const n = r * c;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [midX, midY] = findIndexes(matrix, mid);

    if (matrix[midX][midY] === target) {
      return true;
    } else if (matrix[midX][midY] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

// TESTING

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
