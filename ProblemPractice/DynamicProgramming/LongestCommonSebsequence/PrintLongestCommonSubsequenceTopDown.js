/*
Given two strings s1 and s2, the task is to find the length of the longest common subsequence present in both of them.

Examples:  

Input: s1 = “ABCDGH”, s2 = “AEDFHR” 
Output: 3 
LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

Input: s1 = “striver”, s2 = “raj” 
Output: 1  

https://www.geeksforgeeks.org/longest-common-subsequence-dp-using-memoization/?ref=lbp
*/

// Below is the solution without using memo

/*
function printLongestCommonSubsequence(str1, m, str2, n, output) {
  if (m === 0 || n === 0) {
    return output;
  }

  if (str1[m - 1] === str2[n - 1]) {
    output =
      printLongestCommonSubsequence(str1, m - 1, str2, n - 1, output) +
      str1[m - 1];
  } else {
    let reduceStr1 = printLongestCommonSubsequence(
      str1,
      m - 1,
      str2,
      n,
      output
    );
    let reduceStr2 = printLongestCommonSubsequence(
      str1,
      m,
      str2,
      n - 1,
      output
    );

    output = reduceStr1.length > reduceStr2.length ? reduceStr1 : reduceStr2;
  }

  return output;
}

let str1 = 'ABCDGH';
let str2 = 'AEDFHR';

// let str1 = 'AGGTAB';
// let str2 = 'GXTXAYB';

let result = printLongestCommonSubsequence(
  str1,
  str1.length,
  str2,
  str2.length,
  ''
);
console.log('Result :: ', result);
*/

// Below is the solution using memo

function printLongestCommonSubsequence(str1, m, str2, n, memo = {}) {
  if (m === 0 || n === 0) {
    return '';
  }

  let key = `${m}:${n}`;

  if (key in memo) {
    return memo[key];
  }

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] =
      printLongestCommonSubsequence(str1, m - 1, str2, n - 1) + str1[m - 1];
  } else {
    let reduceStr1 = printLongestCommonSubsequence(str1, m - 1, str2, n);
    let reduceStr2 = printLongestCommonSubsequence(str1, m, str2, n - 1);

    memo[key] = reduceStr1.length > reduceStr2.length ? reduceStr1 : reduceStr2;
  }

  return memo[key];
}

// let str1 = 'ABCDGH';
// let str2 = 'AEDFHR';

let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';

let result = printLongestCommonSubsequence(
  str1,
  str1.length,
  str2,
  str2.length
);
console.log('Result :: ', result);
