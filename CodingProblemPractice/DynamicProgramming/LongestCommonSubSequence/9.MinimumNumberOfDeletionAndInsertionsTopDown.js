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

function findLongestCommonSubSequenceCount(m, str1, n, str2, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let key = `${m}:${n}`;

  if (key in memo) return memo[key];

  if (str1[m - 1] === str2[n - 1]) {
    memo[key] =
      findLongestCommonSubSequenceCount(m - 1, str1, n - 1, str2, memo) + 1;
  } else {
    let reduceStr1 = findLongestCommonSubSequenceCount(
      m - 1,
      str1,
      n,
      str2,
      memo
    );
    let reduceStr2 = findLongestCommonSubSequenceCount(
      m,
      str1,
      n - 1,
      str2,
      memo
    );
    memo[key] = Math.max(reduceStr1, reduceStr2);
  }

  return memo[key];
}

function main(str1, str2) {
  let result = {};
  let m = str1.length;
  let n = str2.length;

  commonSubSequence = findLongestCommonSubSequenceCount(m, str1, n, str2);

  result['deletion'] = m - commonSubSequence;
  result['insertion'] = n - commonSubSequence;

  return result;
}

let str1 = 'heap',
  str2 = 'pea';

let result = main(str1, str2);
console.log(
  `Minimum deletion : ${result.deletion} and Minimum insertion : ${result.insertion}`
);

/*

Time Complexity: 𝑂(𝑛 × m)
Space Complexity: 𝑂(𝑛 × m)

*/
