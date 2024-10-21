/*
Given two strings s1 and s2, the task is to find the length of the longest common subsequence present in both of them.

Examples:  

Input: s1 = “ABCDGH”, s2 = “AEDFHR” 
Output: 'ADH' 
LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

Input: s1 = “striver”, s2 = “raj” 
Output: 1  

https://www.geeksforgeeks.org/longest-common-subsequence-dp-using-memoization/?ref=lbp
*/

function findLongestCommonSubSequence(m, s1, n, s2) {
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(''));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
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

// let s1 = 'ABCDGH',
//   s2 = 'AEDFHR';

// let s1 = 'striver',
//   s2 = 'raj';

let s1 = 'AGGTAB';
let s2 = 'GXTXAYB';

let result = findLongestCommonSubSequence(s1.length, s1, s2.length, s2);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × m)
Space Complexity: 𝑂(𝑛 × m)

*/
