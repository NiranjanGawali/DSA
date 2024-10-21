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

function findLongestCommonSebsequence(m, str1, n, str2, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;
  if (key in memo) {
    return memo[key];
  }

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] =
      findLongestCommonSebsequence(m - 1, str1, n - 1, str2, memo) + 1;
  } else {
    let reduceStr1 = findLongestCommonSebsequence(m - 1, str1, n, str2, memo);
    let reduceStr2 = findLongestCommonSebsequence(m, str1, n - 1, str2, memo);
    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}

function main(s, t) {
  let m = s.length;
  let n = t.length;

  let output = findLongestCommonSebsequence(m, s, n, t);

  return output === Math.min(m, n);
}

let s = 'abc',
  t = 'ahbgdc';

// let s = 'axc',
//   t = 'ahbgdc';

let result = main(s, t);
console.log('Result : ', result);
