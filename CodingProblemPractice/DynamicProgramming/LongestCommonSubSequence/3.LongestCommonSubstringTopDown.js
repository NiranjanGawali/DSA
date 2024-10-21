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

// Top down approach
/*
function findLongestCommonSubstringCount(m, str1, n, str2, maxLen) {
  if (m === 0 || n === 0) {
    return maxLen;
  }

  if (str1[m - 1] === str2[n - 1]) {
    maxLen =
      1 + findLongestCommonSubstringCount(m - 1, str1, n - 1, str2, maxLen);
  } else {
    let reduceStr1 = findLongestCommonSubstringCount(
      m - 1,
      str1,
      n,
      str2,
      maxLen
    );
    let reduceStr2 = findLongestCommonSubstringCount(
      m,
      str1,
      n - 1,
      str2,
      maxLen
    );
    maxLen = Math.max(maxLen, reduceStr1, reduceStr2);
  }

  return maxLen;
}

let x = 'GeeksforGeeks',
  y = 'GeeksQuiz';

let result = findLongestCommonSubstringCount(x.length, x, y.length, y, 0);
console.log('Result : ', result);
*/

// Top down approach with memoization

function findLongestCommonSubstringCount(m, str1, n, str2, maxLen, memo = {}) {
  if (m === 0 || n === 0) {
    return maxLen;
  }

  let key = `${m}:${n}`;

  if (key in memo) return memo[key];

  if (str1[m - 1] === str2[n - 1]) {
    maxLen =
      1 +
      findLongestCommonSubstringCount(m - 1, str1, n - 1, str2, maxLen, memo);
  } else {
    let reduceStr1 = findLongestCommonSubstringCount(
      m - 1,
      str1,
      n,
      str2,
      maxLen,
      memo
    );
    let reduceStr2 = findLongestCommonSubstringCount(
      m,
      str1,
      n - 1,
      str2,
      maxLen,
      memo
    );
    maxLen = Math.max(maxLen, reduceStr1, reduceStr2);
  }

  memo[key] = maxLen;

  return maxLen;
}

let x = 'GeeksforGeeks',
  y = 'GeeksQuiz';

let result = findLongestCommonSubstringCount(x.length, x, y.length, y, 0);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × m)
Space Complexity: 𝑂(𝑛 × m)

*/
