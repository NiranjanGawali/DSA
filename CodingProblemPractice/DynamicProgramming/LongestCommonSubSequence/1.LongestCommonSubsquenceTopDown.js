/*

Given two strings str1 & str 2 of length n & m respectively, return the length of their longest common subsequence. If there is no common subsequence then, return 0. 

A subsequence is a sequence that can be derived from the given string by deleting some or no elements without changing the order of the remaining elements. For example, "abe" is a subsequence of "abcde".

Example 1:
Input: n = 6, str1 = ABCDGH and m = 6, str2 = AEDFHR
Output: 3
Explanation: LCS for input strings “ABCDGH” and “AEDFHR” is “ADH” of length 3.


Example 2:
Input: n = 3, str1 = ABC and m = 2, str2 = AC
Output: 2
Explanation: LCS of "ABC" and "AC" is "AC" of length 2.


Example 3:
Input: n = 4, str1 = XYZW and m = 4, str2 = XYWZ
Output: 3
Explanation: There are two common subsequences of length 3 “XYZ”, and”XYW”, and no common subsequence. of length more than 3.

https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1
*/

// LCS using top down approach
/*
function findLCSLength(n, str1, m, str2) {
  if (n === 0 || m === 0) {
    return 0;
  }

  if (str1[n] === str2[m]) {
    return 1 + findLCSLength(n - 1, str1, m - 1, str2);
  } else {
    let reduceStr1 = findLCSLength(n - 1, str1, m, str2);
    let reduceStr2 = findLCSLength(n, str1, m - 1, str2);
    return Math.max(reduceStr1, reduceStr2);
  }
}

let n = 6,
  str1 = 'ABCDGH',
  m = 6,
  str2 = 'AEDFHR';

let result = findLCSLength(n, str1, m, str2);

console.log('Result : ', result);
*/

// LCS using top down approach using memoization

function findLCSLength(n, str1, m, str2, memo = {}) {
  if (n === 0 || m === 0) {
    return 0;
  }

  let key = `${n}:${m}`;

  if (key in memo) return memo[key];

  if (str1[n] === str2[m]) {
    memo[key] = 1 + findLCSLength(n - 1, str1, m - 1, str2);
  } else {
    let reduceStr1 = findLCSLength(n - 1, str1, m, str2);
    let reduceStr2 = findLCSLength(n, str1, m - 1, str2);
    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}

let n = 6,
  str1 = 'ABCDGH',
  m = 6,
  str2 = 'AEDFHR';

// let n = 4,
//   str1 = 'XYZW',
//   m = 4,
//   str2 = 'XYWZ';

let result = findLCSLength(n, str1, m, str2);

console.log('Result : ', result);
