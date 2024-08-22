// Spiral Matrix

/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example1: 

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// SOLUTION --- TIME => O(N * M) & AUX SPACE => O(N)

var spiralOrder = function (matrix) {
  // Define ans array to store the result.
  let result = [];

  // Determine the number of rows and columns
  let rows = matrix.length; // no. of rows
  let cols = matrix[0].length; // no. of columns

  // Initialize the pointers reqd for traversal.
  let top = 0;
  let left = 0;
  let bottom = rows - 1;
  let right = cols - 1;

  // Loop until all elements are not traversed.
  while (top <= bottom && left <= right) {
    // For moving left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }

    top++;

    // For moving top to bottom.
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    right--;

    // For moving right to left.
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }

      bottom--;
    }

    // For moving bottom to top.
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }

      left++;
    }
  }
  return result;
};

// TESTING

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
