/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:
n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000


https://leetcode.com/problems/rotate-image/description/?envType=study-plan-v2&envId=top-interview-150

*/

function rotate(matrix) {
  let n = matrix.length;

  // Initial matrix
  /*
    1  2  3
    4  5  6
    7  8  9
  */

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Swap element at (i, j) with element at (j, i)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  //Result after transpose
  /*
    1  4  7
    2  5  8
    3  6  9
  */

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      // Swap elements at left and right in the current row
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }

  // Result after reversing each row
  /*
    7  4  1
    8  5  2
    9  6  3
  */
  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = rotate(matrix);

console.log('Result : ', result);

/*
Expected result : 
7  4  1
8  5  2
9  6  3
*/

/*

 * Time Complexity: O(n^2)
 * - The matrix is processed in two passes: once for transposing and once for reversing rows.
 * - Each element is touched a constant number of times.
 * 
 * Space Complexity: O(1)
 * - The rotation is done in place, using only a constant amount of extra space.
 * - No additional data structures are used.

*/
