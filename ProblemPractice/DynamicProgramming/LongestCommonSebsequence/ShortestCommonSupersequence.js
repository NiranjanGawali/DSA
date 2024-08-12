/*
Given two strings str1 and str2, the task is to find the length of the shortest string that has both str1 and str2 as subsequences.

Examples : 

Input:   str1 = "geek",  str2 = "eke"
Output: 5
Explanation: 
String "geeke" has both string "geek" 
and "eke" as subsequences.

Input:   str1 = "AGGTAB",  str2 = "GXTXAYB"
Output:  9
Explanation: 
String "AGXGTXAYB" has both string 
"AGGTAB" and "GXTXAYB" as subsequences.


https://www.geeksforgeeks.org/shortest-common-supersequence/
*/

// Right now we are getting longest common sub sequence using Top Down approach but same can be achieved using Bottom Up approach.
// These examples are present in the separate files in the String Problems folder

function findLongestCommonSubSequence(str1, m, str2, n, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;

  if (key in memo) return memo[key];

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] = findLongestCommonSubSequence(str1, m - 1, str2, n - 1) + 1;
  } else {
    let reduceStr1 = findLongestCommonSubSequence(str1, m - 1, str2, n);
    let reduceStr2 = findLongestCommonSubSequence(str1, m, str2, n - 1);

    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}

function findShortestCommonSupersequence(str1, m, str2, n) {
  let longestCommonSubSequence = findLongestCommonSubSequence(str1, m, str2, n);
  return m + n - longestCommonSubSequence;
}

let str1 = 'geek',
  str2 = 'eke';

let result = findShortestCommonSupersequence(
  str1,
  str1.length,
  str2,
  str2.length
);
console.log('Shortest common super sequence : ', result);
