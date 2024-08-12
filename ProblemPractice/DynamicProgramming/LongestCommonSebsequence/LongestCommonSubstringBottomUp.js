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

function findLongestCommonSubstring(str1, m, str2, n) {
  let dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let maxLength = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        maxLength = Math.max(maxLength, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return maxLength;
}

let str1 = 'GeeksforGeeks';
let str2 = 'GeeksQuiz';

let result = findLongestCommonSubstring(str1, str1.length, str2, str2.length);
console.log('Result :: ', result);
