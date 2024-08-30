/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.


Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1

https://leetcode.com/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-interview-150

*/

function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // Step 1: Determine if the first row or first column needs to be zeroed
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Step 2: Use the first row and column to mark the rows and columns that need to be zeroed
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Step 3: Zero out cells based on the markers in the first row and column
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 4: Zero out the first row and first column if needed
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}

// Example usage:
let matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix1);
console.log(matrix1); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// let matrix2 = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ];
// setZeroes(matrix2);
// console.log(matrix2); // Output: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]

/*
Time Complexity: O(m*n) 
Space Complexity: O(1) 
*/
