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
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  function moveSpiral(startRow, endRow, startCol, endCol) {
    // Traverse start row
    for (let i = startCol; i < endCol + 1; i++) {
      result.push(matrix[startRow][i]);
    }

    // Traverse end col
    for (let i = startRow + 1; i < endRow + 1; i++) {
      result.push(matrix[i][endCol]);
    }

    // Traverse end row in reverse
    if (endRow > startRow) {
      for (let i = endCol - 1; i >= startCol; i--) {
        result.push(matrix[endRow][i]);
      }
    }

    // Traverse start col in reverse
    if (startCol < endCol) {
      for (let i = endRow - 1; i >= startRow + 1; i--) {
        result.push(matrix[i][startCol]);
      }
    }

    if (result.length < rows * cols) {
      moveSpiral(startRow + 1, endRow - 1, startCol + 1, endCol - 1);
    }
  }

  moveSpiral(0, rows - 1, 0, cols - 1);

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
