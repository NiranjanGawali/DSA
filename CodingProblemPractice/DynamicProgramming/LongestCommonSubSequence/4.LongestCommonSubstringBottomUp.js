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

function findLongestCommonSubstringCount(m, str1, n, str2) {
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  let maxLen = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        maxLen = Math.max(dp[i][j], maxLen);
      } else {
        dp[i][j] = 0;
      }
    }
  }

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
