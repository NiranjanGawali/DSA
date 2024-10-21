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

function findLongestCommonSubSequenceCount(m, str1, n, str2) {
  let dp = Array(m + 1)
    .fill()
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
  let n = str.length;
  let reverseString = str.split('').reverse().join('');
  let longestCommonSubsequenceCount = findLongestCommonSubSequenceCount(
    n,
    str,
    n,
    reverseString
  );

  return n - longestCommonSubsequenceCount;
}

let str = 'aebcbda';
// let str = 'geeksforgeeks';

let result = main(str);
console.log(
  'Minimum number of insertions to make string palindrome are : ',
  result
);

/*

Time Complexity: 𝑂(𝑛^2)
Space Complexity: 𝑂(𝑛^2)

*/
