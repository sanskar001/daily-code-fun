// Set Matrix Zeroes

/*
Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

Examples
Examples 1:
Input:
 matrix=[[1,1,1],[1,0,1],[1,1,1]]

Output:
 [[1,0,1],[0,0,0],[1,0,1]]

Explanation:
 Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
Input:
 matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

Output:
[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Explanation:
Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0
*/

// SOLUTION-1 --- TIME => O(N^2) & AUX SPACE => O(N);

/*
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const colIndexes = new Set();
  const rowIndexes = new Set();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        colIndexes.add(c);
        rowIndexes.add(r);
      }
    }
  }

  // set zeroes respective row and col

  // set to specific row
  for (let r of rowIndexes) {
    for (let c = 0; c < cols; c++) {
      matrix[r][c] = 0;
    }
  }

  // set to specific column
  for (let c of colIndexes) {
    for (let r = 0; r < rows; r++) {
      matrix[r][c] = 0;
    }
  }

  return matrix;
};
*/

// ============================================================

// SOLUTION-1 --- TIME => O(N*M) & AUX SPACE => O(1);

/*
In the previous approach we had taken two arrays to store the ith row’s and jth column’s status, Idea here is to use the existing space i.e. matrix itself. We can use the first row and first column of a matrix to store which row elements and column elements to be marked as zeroes.
*/

function setZeroes(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let C0 = 1;

  // Traverse the matrix and mark 1st row & 1st col as follows:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // mark i-th row:
        matrix[i][0] = 0;

        // mark j-th column:
        if (j === 0) {
          C0 = 0;
        } else {
          matrix[0][j] = 0;
        }
      }
    }
  }

  // Mark with 0 from (1,1) to (n-1, m-1):
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        // Check for col & row:
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // Finally mark the 1st row then 1st col:
  if (matrix[0][0] === 0) {
    matrix[0].fill(0);
  }
  if (C0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

// TESTING

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
