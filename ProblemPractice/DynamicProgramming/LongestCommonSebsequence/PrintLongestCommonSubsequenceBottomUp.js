/*
Given two strings s1 and s2, the task is to find the length of the longest common subsequence present in both of them.

Examples:  

Input: s1 = “ABCDGH”, s2 = “AEDFHR” 
Output: 3 
LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

Input: s1 = “striver”, s2 = “raj” 
Output: 1  

https://www.geeksforgeeks.org/longest-common-subsequence-dp-using-memoization/?ref=lbp
*/

function printLongestCommonSubsequence(str1, m, str2, n) {
  let dp = Array(m + 1)
    .fill('')
    .map(() => Array(n + 1).fill(''));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        let reduceStr1 = dp[i - 1][j];
        let reduceStr2 = dp[i][j - 1];
        dp[i][j] =
          reduceStr1.length > reduceStr2.length ? reduceStr1 : reduceStr2;
      }
    }
  }

  return dp[m][n];
}

// let str1 = 'ABCDGH';
// let str2 = 'AEDFHR';

let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';

let result = printLongestCommonSubsequence(
  str1,
  str1.length,
  str2,
  str2.length
);
console.log('Result :: ', result);
