/*
Given two strings ‘str1’ and ‘str2’ of size m and n respectively. The task is to remove/delete and insert the minimum number of characters from/in str1 to transform it into str2. It could be possible that the same character needs to be removed/deleted from one point of str1 and inserted at some another point.

Example 1: 

Input : 
str1 = "heap", str2 = "pea" 
Output : 
Minimum Deletion = 2 and
Minimum Insertion = 1
Explanation:
p and h deleted from heap
Then, p is inserted at the beginning
One thing to note, though p was required yet
it was removed/deleted first from its position and
then it is inserted to some other position.
Thus, p contributes one to the deletion_count
and one to the insertion_count.

https://www.geeksforgeeks.org/minimum-number-deletions-insertions-transform-one-string-another/

*/

// Right now we are getting longest common sub sequence using Bottom Up approach but same can be achieved using Tom down approach.
// These examples are present in the separate files in the String Problems folder

function findCommonSubSequence(str1, m, str2, n) {
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

function main(str1, str2) {
  let result = {};
  let m = str1.length;
  let n = str2.length;

  let commsonSebSequence = findCommonSubSequence(str1, m, str2, n);
  result['deletion'] = m - commsonSebSequence;
  result['insertion'] = n - commsonSebSequence;

  return result;
}

let str1 = 'heap',
  str2 = 'pea';

let result = main(str1, str2);
console.log(
  `Minimum deletion : ${result.deletion} and Minimum insertion : ${result.insertion}`
);
