/*
Given string str, the task is to find the minimum number of characters to be inserted to convert it to a palindrome.

Before we go further, let us understand with a few examples: 

ab: Number of insertions required is 1 i.e. bab
aa: Number of insertions required is 0 i.e. aa
abcd: Number of insertions required is 3 i.e. dcbabcd
abcda: Number of insertions required is 2 i.e. adcbcda which is the same as the number of insertions in the substring bcd(Why?).
abcde: Number of insertions required is 4 i.e. edcbabcde


https://www.geeksforgeeks.org/minimum-insertions-to-form-a-palindrome-dp-28/
*/

/*
In this problem we can use the same logic as we used in the as earlier because, 
number insertions that we need make to make string palindrome is going to be number deletions that needed 
to make the string palindrome.
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

  let insertionCount = str.length - longestPalindromicSubsequence;
  return insertionCount;
}

let input = 'aebcbda';

// let input = 'geeksforgeeks';

let result = main(input);
console.log(
  'Minimum number of insertions to make string palindrome : ',
  result
);
