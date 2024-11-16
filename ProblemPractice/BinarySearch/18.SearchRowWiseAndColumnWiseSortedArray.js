/*

Given an N X N matrix and an integer X, find the position of X in the matrix if it is present. Otherwise, print “Element not found”. Every row and column of the matrix is sorted in increasing order.

Examples: 

Input: mat[4][4] =
let mat1 = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]
];
let x1 = 29;
Output: Found at (2, 1)
Explanation: Element at (2,1) is 29


let mat2 = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]
];
let x2 = 100;
Output: Element not found
Explanation: Element 100 does not exist in the matrix


https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/

*/

function findElement(mat, target) {
  let row = 0;
  let col = mat[0].length - 1;

  while (row < mat.length && col >= 0) {
    if (mat[row][col] === target) {
      return [row, col];
    } else if (mat[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return -1;
}

let mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
let x = 29;

/*
let mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
let x = 100;
*/

let result = findElement(mat, x);
console.log('Result : ', result);

/*

// Time Complexity: O(m + n), where m is the number of rows and n is the number of columns
// Space Complexity: O(1), constant space usage

*/
