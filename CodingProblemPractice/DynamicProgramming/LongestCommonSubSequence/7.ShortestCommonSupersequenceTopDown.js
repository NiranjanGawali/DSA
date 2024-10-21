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

function findLongestCommonSubSequenceCount(m, str1, n, str2, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;

  if (key in memo) return memo[key];

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

  return memo[key];
}

function main(str1, str2) {
  let m = str1.length;
  let n = str2.length;
  let longestCommonSubSequence = findLongestCommonSubSequenceCount(
    m,
    str1,
    n,
    str2
  );

  let shortestCommonSuperSequence = m + n - longestCommonSubSequence;
  return shortestCommonSuperSequence;
}

let str1 = 'geek',
  str2 = 'eke';

let result = main(str1, str2);

console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × m)
Space Complexity: 𝑂(𝑛 × m)

*/
