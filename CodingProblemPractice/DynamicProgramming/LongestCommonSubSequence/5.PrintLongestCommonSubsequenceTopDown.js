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

// Top down approach
/*
function findLongestCommonSubSequence(m, s1, n, s2, output) {
  if (m === 0 || n === 0) {
    return output;
  }

  if (s1[m - 1] === s2[n - 1]) {
    output =
      findLongestCommonSubSequence(m - 1, s1, n - 1, s2, output) + s1[m - 1];
  } else {
    let reduceStr1 = findLongestCommonSubSequence(m - 1, s1, n, s2, output);
    let reduceStr2 = findLongestCommonSubSequence(m, s1, n - 1, s2, output);
    output = reduceStr1.length > reduceStr2.length ? reduceStr1 : reduceStr2;
  }

  return output;
}

// let s1 = 'ABCDGH',
//   s2 = 'AEDFHR';

let s1 = 'striver',
  s2 = 'raj';

let result = findLongestCommonSubSequence(s1.length, s1, s2.length, s2, '');
console.log('Result : ', result);
*/

// Top down with memoization

function findLongestCommonSubSequence(m, s1, n, s2, memo = {}) {
  if (m === 0 || n === 0) {
    return '';
  }

  let key = `${m}:${n}`;

  if (key in memo) {
    return memo[key];
  }

  if (s1[m - 1] === s2[n - 1]) {
    memo[key] = findLongestCommonSubSequence(m - 1, s1, n - 1, s2) + s1[m - 1];
  } else {
    let reduceStr1 = findLongestCommonSubSequence(m - 1, s1, n, s2);
    let reduceStr2 = findLongestCommonSubSequence(m, s1, n - 1, s2);
    memo[key] = reduceStr1.length > reduceStr2.length ? reduceStr1 : reduceStr2;
  }

  return memo[key];
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
