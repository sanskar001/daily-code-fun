/*
Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];
  let count = rows * cols;

  function moveSpiral(startRow, startCol, endRow, endCol) {
    if (count === 0) {
      return;
    }

    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
      count--;
    }

    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
      count--;
    }

    if (count === 0) {
      return;
    }

    for (let i = endCol - 1; i >= startCol; i--) {
      result.push(matrix[endRow][i]);
      count--;
    }

    for (let i = endRow - 1; i >= startRow + 1; i--) {
      result.push(matrix[i][startCol]);
      count--;
    }

    moveSpiral(startRow + 1, startCol + 1, endRow - 1, endCol - 1);
  }

  moveSpiral(0, 0, rows - 1, cols - 1);

  return result;
};

// console.log(
//   spiralOrder([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//   ])
// );

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
