/*

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

*/

function spiralMatrix(matrix) {
  let results = []; // Array to store the result
  let top = 0; // Initialize the top boundary
  let bottom = matrix.length - 1; // Initialize the bottom boundary
  let left = 0; // Initialize the left boundary
  let right = matrix[0].length - 1; // Initialize the right boundary

  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      results.push(matrix[top][i]);
    }
    top++; // Move the top boundary down

    // Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      results.push(matrix[i][right]);
    }
    right--; // Move the right boundary left

    // Traverse from right to left along the bottom row if there are rows left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        results.push(matrix[bottom][i]);
      }
      bottom--; // Move the bottom boundary up
    }

    // Traverse from bottom to top along the left column if there are columns left
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        results.push(matrix[i][left]);
      }
      left++; // Move the left boundary right
    }
  }

  return results;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = spiralMatrix(matrix);

console.log('Result : ', result);

/*
Time Complexity: O(m * n) where m is the number of rows and n is the number of columns. Each element is processed exactly once.
Space Complexity: O(m * n) for storing the result in the results array.
*/
