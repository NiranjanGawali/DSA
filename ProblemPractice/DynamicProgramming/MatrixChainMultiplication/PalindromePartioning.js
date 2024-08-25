/*

Given a string str, a partitioning of the string is a palindrome partitioning if every sub-string of the partition is a palindrome, the task is to find the minimum number of cuts needed for palindrome partitioning of the given string.


Palindrome Partition

Examples :  

Input: str = “geek” 
Output: 2 
Explanation: We need to make minimum 2 cuts, i.e., “g ee k”

Input: str = “aaaa” 
Output: 0 
Explanation: The string is already a palindrome.

Input: str = “abcde” 
Output: 4

Input: str = “abbac” 
Output: 1 


https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/
*/

/*
function isPalindrome(str, i, j) {
  let temp = str.slice(i, j + 1);
  let reverseString = temp.split('').reverse().join('');
  return temp == reverseString;
}
*/

// Alternate palindrome check approach
function isPalindrome(str, i, j) {
  if (i === j) return true;

  if (i > j) return true;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }

  return true;
}

function findMinimumPartions(str, i, j, memo = {}) {
  if (i >= j) {
    return 0;
  }

  if (isPalindrome(str, i, j)) {
    return 0;
  }

  let key = `${i}:${j}`;

  if (key in memo) {
    return memo[key];
  }

  let minValue = Number.MAX_SAFE_INTEGER;

  // by adding memoization in the for loop additional level memoization is added here.

  for (let k = i; k <= j - 1; k++) {
    let leftKey = `${i}:${k}`;
    let rightKey = `${k + 1}:${j}`;

    let left, right;

    if (leftKey in memo) {
      left = memo[leftKey];
    } else {
      left = findMinimumPartions(str, i, k, memo);
    }

    if (rightKey in memo) {
      right = memo[rightKey];
    } else {
      right = findMinimumPartions(str, k + 1, j, memo);
    }

    let ans = left + right + 1;
    minValue = Math.min(ans, minValue);
  }

  memo[key] = minValue;

  return minValue;
}

let input = 'geek';
// let input = 'aaaa';
// let input = 'abcde';
// let input = 'abbac';

let result = findMinimumPartions(input, 0, input.length - 1);
console.log('Minimum number of partitions required : ', result);
