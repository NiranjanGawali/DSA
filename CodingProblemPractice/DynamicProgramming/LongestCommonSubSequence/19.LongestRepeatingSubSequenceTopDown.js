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

function getLongestUniqueCommonSubSequence(m, str1, n, str2, memo = {}) {
  if (m === 0 || n === 0) {
    return '';
  }

  let key = `${m}:${n}`;
  if (key in memo) {
    return memo[key];
  }

  if (str1[m - 1] === str2[n - 1] && m !== n) {
    memo[key] =
      getLongestUniqueCommonSubSequence(m - 1, str1, n - 1, str2, memo) +
      str1[m - 1];
  } else {
    let reduceStr1 = getLongestUniqueCommonSubSequence(
      m - 1,
      str1,
      n,
      str2,
      memo
    );
    let reduceStr2 = getLongestUniqueCommonSubSequence(
      m,
      str1,
      n - 1,
      str2,
      memo
    );
    memo[key] = reduceStr1.length > reduceStr2.length ? reduceStr1 : reduceStr2;
  }

  return memo[key];
}

function main(str) {
  return getLongestUniqueCommonSubSequence(str.length, str, str.length, str);
}

// let str = 'aabb';
let str = 'aab';
let result = main(str);
console.log('Result : ', result);
