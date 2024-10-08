/*
We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row 
and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

Example 1:
Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0

Example 2:
Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01

Example 3:
Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01
*/

// Below is the brute force solution

/*

function findKthSymbol(n, k) {
  let map = {};
  for (let i = 1; i <= n; i++) {
    let tempArr = [];
    if (i == 1) {
      tempArr.push(0);
    } else {
      let prevArr = map[i - 1];
      for (let j = 0; j < prevArr.length; j++) {
        if (prevArr[j] === 0) {
          tempArr.push(0);
          tempArr.push(1);
        } else {
          tempArr.push(1);
          tempArr.push(0);
        }
      }
    }
    map[i] = tempArr;
  }

  let output = map[n][k - 1];
  return output;
}

let result = findKthSymbol(2, 1);
console.log('K Symbol : ', result);

*/

function findKthSymbol(n, k) {
  if (n == 1 && k == 1) {
    return 0;
  }

  let length = Math.pow(2, n - 1);

  let midValue = length / 2;

  if (k <= midValue) {
    return findKthSymbol(n - 1, k);
  } else {
    return 1 - findKthSymbol(n - 1, k - midValue);
  }
}

let result = findKthSymbol(4, 1);
console.log('K Symbol : ', result);

// 0;
// 01;
// 0110;
// 01101001;
