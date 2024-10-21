/*

Given two strings X and Y, print the shortest string that has both X and Y as subsequences. If multiple shortest super-sequence exists, print any one of them.
Examples: 
 

Input: X = "AGGTAB",  Y = "GXTXAYB"
Output: "AGXGTXAYB" OR "AGGXTXAYB" 
OR Any string that represents shortest
supersequence of X and Y

Input: X = "HELLO",  Y = "GEEK"
Output: "GEHEKLLO" OR "GHEEKLLO"
OR Any string that represents shortest 
supersequence of X and Y
 
https://www.geeksforgeeks.org/print-shortest-common-supersequence/

*/

// Below solution is achieved via bottom up approach

function findLongestCommonSubSequenceCount(m, str1, n, str2, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;
  if (key in memo) {
    return memo[key];
  }

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] =
      findLongestCommonSubSequenceCount(m - 1, str1, n - 1, str2, memo) + 1;
  } else {
    let reduceStr1 = findLongestCommonSubSequenceCount(
      m - 1,
      str1,
      n,
      str2,
      memo
    );
    let reduceStr2 = findLongestCommonSubSequenceCount(
      m,
      str1,
      n - 1,
      str2,
      memo
    );
    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  memo[key];
}

function main(str1, str2) {
  let m = str1.length;
  let n = str2.length;

  // let memo = findLongestCommonSubSequenceCount(m, str1, n, str2);
  let memo = {}; // Initialize the memo object
  findLongestCommonSubSequenceCount(m, str1, n, str2, memo); // Populate memo

  let i = m;
  let j = n;
  let output = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      output.push(str1[i - 1]);
      i--;
      j--;
    } else if (memo[`${i - 1}:${j}`] > memo[`${i}:${j - 1}`]) {
      output.push(str1[i - 1]);
      i--;
    } else {
      output.push(str2[j - 1]);
      j--;
    }
  }

  while (i > 0) {
    output.push(str1[i - 1]);
    i--;
  }

  while (j > 0) {
    output.push(str2[j - 1]);
    j--;
  }

  return output.reverse().join('');
}

let X = 'AGGTAB',
  Y = 'GXTXAYB';

// let X = 'HELLO',
//   Y = 'GEEK';

let result = main(X, Y);

console.log('Result : ', result);
