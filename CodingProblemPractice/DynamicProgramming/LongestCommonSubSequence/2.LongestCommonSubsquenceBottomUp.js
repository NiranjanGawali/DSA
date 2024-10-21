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

// LCS using top down approach using bottom up approach

function findLCSLength(n, str1, m, str2, memo = {}) {
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

// let n = 6,
//   str1 = 'ABCDGHY',
//   m = 6,
//   str2 = 'AEDFHRY';

let n = 3,
  str1 = 'XYW',
  m = 3,
  str2 = 'XYZ';

let result = findLCSLength(n, str1, m, str2);

console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × m)
Space Complexity: 𝑂(𝑛 × m)

*/
