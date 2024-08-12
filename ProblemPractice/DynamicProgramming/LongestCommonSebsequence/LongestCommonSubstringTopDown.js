/*
Given two strings ‘X’ and ‘Y’, find the length of the longest common substring. 

Examples : 

Input : X = “GeeksforGeeks”, y = “GeeksQuiz” 
Output : 5 
Explanation:
The longest common substring is “Geeks” and is of length 5.

Input : X = “abcdxyz”, y = “xyzabcd” 
Output : 4 
Explanation:
The longest common substring is “abcd” and is of length 4.

Input : X = “zxabcdezy”, y = “yzabcdezx” 
Output : 6 
Explanation:
The longest common substring is “abcdez” and is of length 6.

https://www.geeksforgeeks.org/longest-common-substring-dp-29/

*/

// Solution without memo

function findLongestCommonSubstring(str1, m, str2, n, maxLen) {
  // m is length of str1 and n is length of str2
  if (m === 0 || n === 0) {
    return maxLen;
  }

  if (str1[m - 1] === str2[n - 1]) {
    maxLen = findLongestCommonSubstring(str1, m - 1, str2, n - 1, maxLen) + 1;
  } else {
    let reduceStr1 = findLongestCommonSubstring(str1, m - 1, str2, n, 0);
    let reduceStr2 = findLongestCommonSubstring(str1, m, str2, n - 1, 0);

    maxLen = Math.max(maxLen, reduceStr1, reduceStr2);
  }

  return maxLen;
}

let str1 = 'GeeksforGeeks';
let str2 = 'GeeksQuiz';

let result = findLongestCommonSubstring(
  str1,
  str1.length,
  str2,
  str2.length,
  0
);
console.log('Result :: ', result);

// Solution with memo

/*

function findLongestCommonSubstring(str1, m, str2, n, memo = {}) {
  // m is length of str1 and n is length of str2
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;

  if (key in memo) {
    return memo[key];
  }

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] = findLongestCommonSubstring(str1, m - 1, str2, n - 1, memo) + 1;
  } else {
    let reduceStr1 = findLongestCommonSubstring(str1, m - 1, str2, n, memo);
    let reduceStr2 = findLongestCommonSubstring(str1, m, str2, n - 1, memo);

    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}

let str1 = 'GeeksforGeeks';
let str2 = 'GeeksQuiz';

let result = findLongestCommonSubstring(str1, str1.length, str2, str2.length);
console.log('Result :: ', result);

*/
