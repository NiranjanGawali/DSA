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
  let reverseString = str.split('').reverse().join('');
  let longestCommonSubsequenceCount = findLongestCommonSubSequenceCount(
    n,
    str,
    n,
    reverseString
  );

  return n - longestCommonSubsequenceCount;
}

// let str = 'aebcbda';
let str = 'geeksforgeeks';

let result = main(str);
console.log(
  'Minimum number of insertions to make string palindrome are : ',
  result
);

/*

Time Complexity: 𝑂(𝑛^2)
Space Complexity: 𝑂(𝑛^2)

*/
