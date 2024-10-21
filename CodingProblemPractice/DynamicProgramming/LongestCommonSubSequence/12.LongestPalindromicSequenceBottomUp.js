/*

Given a string ‘S’, find the length of the Longest Palindromic Subsequence in it.

The Longest Palindromic Subsequence (LPS) is the problem of finding a maximum-length subsequence of a given string that is also a Palindrome.

LPS
Longest Palindromic Subsequence

Examples:

Input: S = “GEEKSFORGEEKS”
Output: 5
Explanation: The longest palindromic subsequence we can get is of length 5. There are more than 1 palindromic subsequences of length 5, for example: EEKEE, EESEE, EEFEE, …etc.

Input: S = “BBABCBCAB”
Output: 7
Explanation: As “BABCBAB” is the longest palindromic subsequence in it. “BBBBB” and “BBCBB” are also palindromic subsequences of the given sequence, but not the longest ones.

https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/

*/

function findLongestCommonSubSequenceCount(m, str1, n, str2) {
  let dp = Array(m + 1)
    .fill()
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

function main(str) {
  let n = str.length;
  let reverseStr = str.split('').reverse().join('');
  return findLongestCommonSubSequenceCount(n, str, n, reverseStr);
}

let str = 'GEEKSFORGEEKS';
// let str = 'BBABCBCAB';

let result = main(str);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛^2)
Space Complexity: 𝑂(𝑛^2)

*/
