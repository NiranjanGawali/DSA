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

// Right now we are getting longest common sub sequence using Bottom Up approach but same can be achieved using Tom down approach.
// These examples are present in the separate files in the String Problems folder

function findCommonSubSequence(str1, m, str2, n) {
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

function main(input) {
  let reverseString = input.split('').reverse().join('');

  // by finding the longest common subsequence of string and its reverse we can find the longest palindromic seqsequence

  return findCommonSubSequence(
    input,
    input.length,
    reverseString,
    reverseString.length
  );
}

let input = 'aebcbda';

let result = main(input);

console.log('The length of longest pandromic subsequence is  : ', result);
