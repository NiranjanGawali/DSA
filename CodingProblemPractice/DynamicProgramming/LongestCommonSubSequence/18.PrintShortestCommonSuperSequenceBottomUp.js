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

function findLongestCommonSubSequenceCount(m, str1, n, str2) {
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        let reduceStr1 = dp[i - 1][j];
        let reduceStr2 = dp[i][j - 1];
        dp[i][j] = Math.max(reduceStr1, reduceStr2);
      }
    }
  }

  return dp;
}

function main(str1, str2) {
  let m = str1.length;
  let n = str2.length;

  let dp = findLongestCommonSubSequenceCount(m, str1, n, str2);

  let i = m;
  let j = n;
  let output = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      output.push(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
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

// let X = 'AGGTAB',
//   Y = 'GXTXAYB';

let X = 'HELLO',
  Y = 'GEEK';

let result = main(X, Y);

console.log('Result : ', result);
