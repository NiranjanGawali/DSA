/*

Given a string, print the longest repeating subsequence such that the two subsequence don’t have same string character at same position, i.e., 
any i’th character in the two subsequences shouldn’t have the same index in the original string.
 

Longest Repeated Subsequence

Examples: 

Input: str = "aabb"
Output: "ab"

Input: str = "aab"
Output: "a"
The two subsequence are 'a'(first) and 'a' 
(second). Note that 'b' cannot be considered 
as part of subsequence as it would be at same
index in both.

https://www.geeksforgeeks.org/longest-repeated-subsequence/

*/

function getLongestUniqueCommonSubSequence(m, str1, n, str2) {
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(''));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1] && i !== j) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
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

function main(str) {
  return getLongestUniqueCommonSubSequence(str.length, str, str.length, str);
}

let str = 'aabb';
// let str = 'aab';
let result = main(str);
console.log('Result : ', result);
