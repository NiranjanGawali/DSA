/*

Given the dimension of a sequence of matrices in an array arr[], where the dimension of the ith matrix is (arr[i-1] * arr[i]), the task is to find the most efficient
 way to multiply these matrices together such that the total number of element multiplications is minimum.

Examples:
Input: arr[] = {40, 20, 30, 10, 30}
Output: 26000
Explanation:There are 4 matrices of dimensions 40×20, 20×30, 30×10, 10×30.
Let the input 4 matrices be A, B, C and D.
The minimum number of  multiplications are obtained by 
putting parenthesis in following way (A(BC))D.
The minimum is 20*30*10 + 40*20*10 + 40*10*30

Input: arr[] = {1, 2, 3, 4, 3}
Output: 30
Explanation: There are 4 matrices of dimensions 1×2, 2×3, 3×4, 4×3. 
Let the input 4 matrices be A, B, C and D.  
The minimum number of multiplications are obtained by 
putting parenthesis in following way ((AB)C)D.
The minimum number is 1*2*3 + 1*3*4 + 1*4*3 = 30

Input: arr[] = {10, 20, 30}
Output: 6000  
Explanation: There are only two matrices of dimensions 10×20 and 20×30. 
So there  is only one way to multiply the matrices, cost of which is 10*20*30

https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/

*/

function findMinimumMCMValue(arr, i, j, memo = {}) {
  if (i >= j) {
    return 0;
  }

  let key = `${i}:${j}`;

  if (key in memo) {
    return memo[key];
  }

  let minVal = Number.MAX_SAFE_INTEGER;

  for (let k = i; k <= j - 1; k++) {
    let op =
      findMinimumMCMValue(arr, i, k, memo) +
      findMinimumMCMValue(arr, k + 1, j, memo) +
      arr[i - 1] * arr[k] * arr[j];

    minVal = Math.min(minVal, op);
  }

  memo[key] = minVal;

  return minVal;
}

// let arr = [40, 20, 30, 10, 30];
// let arr = [1, 2, 3, 4, 3];
let arr = [10, 20, 30];

let result = findMinimumMCMValue(arr, 1, arr.length - 1);
console.log('Result : ', result);
