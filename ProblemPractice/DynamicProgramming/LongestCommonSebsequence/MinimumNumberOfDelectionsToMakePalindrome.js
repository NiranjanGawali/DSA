/*

Given a string of size ‘n’. The task is to remove or delete the minimum number of characters from the string so that the resultant string is a palindrome. 

Note: The order of characters should be maintained. 

Examples : 

Input : aebcbda
Output : 2
Remove characters 'e' and 'd'
Resultant string will be 'abcba'
which is a palindromic string

Input : geeksforgeeks
Output : 8

*/

function findLongestPalindromicSubsequence(str1, m, str2, n) {
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

function main(str) {
  let reverseString = str.split('').reverse().join('');

  let longestPalindromicSubsequence = findLongestPalindromicSubsequence(
    str,
    str.length,
    reverseString,
    reverseString.length
  );

  let deletionCount = str.length - longestPalindromicSubsequence;
  return deletionCount;
}

// let input = 'aebcbda';

let input = 'geeksforgeeks';

let result = main(input);
console.log('Minimum number of deletions to make string palindrome : ', result);
