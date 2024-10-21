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

function findLongestCommonSubSequenceCount(m, str1, n, str2, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;

  if (key in memo) {
    return memo[key];
  }

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] = findLongestCommonSubSequenceCount(m - 1, str1, n - 1, str2) + 1;
  } else {
    let reduceStr1 = findLongestCommonSubSequenceCount(m - 1, str1, n, str2);
    let reduceStr2 = findLongestCommonSubSequenceCount(m, str1, n - 1, str2);
    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}

function main(str) {
  let n = str.length;
  let reverseStr = str.split('').reverse().join('');
  return findLongestCommonSubSequenceCount(n, str, n, reverseStr);
}

let str = 'GEEKSFORGEEKS';

let result = main(str);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛^2)
Space Complexity: 𝑂(𝑛^2)

*/
