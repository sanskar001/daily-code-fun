// Rotate Image

/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Examples
Example 1:
Input:
 [[1,2,3],[4,5,6],[7,8,9]]

Output
: [[7,4,1],[8,5,2],[9,6,3]]

Explanation:
 Rotate the matrix simply by 90 degree clockwise and return the matrix.

Example 2:
Input:
 [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

Output:
[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Explanation:
 Rotate the matrix simply by 90 degree clockwise and return the matrix
*/

// SOLUTION --- TIME => O(N * M) & AUX SPACE => O(1)

var rotate = function (matrix) {
  const rows = matrix.length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < r; c++) {
      // Swapping between mirron indexes
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  // Reverse all columns elements of each rows
  for (let r = 0; r < rows; r++) {
    matrix[r].reverse();
  }

  return matrix;
};

// TESTING

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
