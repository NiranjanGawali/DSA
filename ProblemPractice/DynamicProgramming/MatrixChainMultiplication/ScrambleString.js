/*

Scramble String using Recursion
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.
Below is one possible representation of A = “great”:
 great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node “gr” and swap its two children, it produces a scrambled string “rgeat”.

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that “rgeat” is a scrambled string of “great”.

Similarly, if we continue to swap the children of nodes “eat” and “at”, it produces a scrambled string “rgtae”.

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that “rgtae” is a scrambled string of “great”.

https://www.interviewbit.com/problems/scramble-string/

*/

function isStringsScrambled(str1, str2, memo = {}) {
  if (str1.length !== str2.length) return false;

  if (str1 === str2) return true;

  let n = str1.length;

  if (n <= 1) return false; // No need to check further

  let key = `${str1}:${str2}`;

  if (key in memo) return memo[key];

  for (let i = 1; i <= n - 1; i++) {
    let condition1 =
      isStringsScrambled(str1.slice(0, i), str2.slice(0, i), memo) &&
      isStringsScrambled(str1.slice(i), str2.slice(i), memo);

    let condition2 =
      isStringsScrambled(str1.slice(0, i), str2.slice(n - i), memo) &&
      isStringsScrambled(str1.slice(i), str2.slice(0, n - i), memo);

    if (condition1 || condition2) {
      memo[key] = true;
      return true;
    }
  }

  memo[key] = false;
  return false;
}

let str1 = 'great';
let str2 = 'eatgr';

let result = isStringsScrambled(str1, str2);
console.log('Result : ', result);
