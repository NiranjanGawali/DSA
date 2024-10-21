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

function findLongestCommonSubSequenceCount(m, str1, n, str2) {
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        let reduceStr1 = dp[i - 1][j];
        let reduceStr2 = dp[i][j - 1];
        dp[i][j] = Math.max(reduceStr1, reduceStr2);
      }
    }
  }

  return dp[n][m];
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
