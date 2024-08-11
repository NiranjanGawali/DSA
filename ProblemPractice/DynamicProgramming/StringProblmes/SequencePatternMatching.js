/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

https://leetcode.com/problems/is-subsequence/description/
 
*/

function findLongestCommonSebsequence(str1, m, str2, n) {
  let dp = Array(m + 1)
    .fill(0)
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

  return dp[m][n];
}

function main(str1, str2) {
  let m = str1.length;
  let n = str2.length;

  let longestCommonSubSequenceLength = findLongestCommonSebsequence(
    str1,
    m,
    str2,
    n
  );

  return longestCommonSubSequenceLength === Math.min(m, n);
}

// let s = 'axc',
//   t = 'ahbgdc';

let s = 'abc';
let t = 'ahbgdc';

let result = main(s, t);
console.log(`Sequence pattern matching for ${s} with ${t}  : `, result);
