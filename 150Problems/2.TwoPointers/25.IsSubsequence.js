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
 

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150
*/

// Below finding the longest common subsequence is top down approach
/*
function findLongestCommonSubsequence(str1, m, str2, n, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;

  if (key in memo) return memo[key];

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] =
      1 + findLongestCommonSubsequence(str1, m - 1, str2, n - 1, memo);
  } else {
    let reduceStr1 = findLongestCommonSubsequence(str1, m - 1, str2, n, memo);
    let reduceStr2 = findLongestCommonSubsequence(str1, m, str2, n - 1, memo);
    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}
  */

// Below finding the longest common subsequence is bottom up approach
/*
function findLongestCommonSubsequence(str1, m, str2, n) {
  let dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[m - 1] === str2[n - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        let reduceStr1 = dp[i - 1][j];
        let reduceStr2 = dp[i][j - 1];
        dp[i][j] = Math.max(reduceStr1, reduceStr2);
      }
    }
  }

  return dp[m][n];
}
*/

// Below is the approach using two pointers method

function findLongestCommonSubsequence(str1, m, str2, n) {
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }

  return i;

  /*
  If we don't want the below present function named isSubsequencePresent
  then we can simply return 

  return i === s.length;
  */
}

function isSubsequencePresent(str1, m, str2, n) {
  let longestCommonSubstringLength = findLongestCommonSubsequence(
    str1,
    m,
    str2,
    n
  );

  return longestCommonSubstringLength === Math.min(m, n);
}

let s = 'abc',
  t = 'ahbgdc';
let result = isSubsequencePresent(s, s.length, t, t.length);
console.log('Is subsequence exists : ', result);

// Time and sapce complexity with top down approach
/*
Time Complexity: O(m * n) 
Space Complexity: O(m * n) and O(m + n) for recursion stack
*/

// Time and sapce complexity with bottom up approach
/*
Time Complexity: O(m * n) 
Space Complexity: O(m * n)
*/

// Time and sapce complexity with bottom up approach
/*
Time Complexity: O(n) 
Space Complexity: O(1)
*/
