/*
Given an array arr[] of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

Examples: 

Input: arr[] = {1, 2, 3, 3}, X = 6 
Output: 3 
All the possible subsets are {1, 2, 3}, 
{1, 2, 3} and {3, 3}

Input: arr[] = {1, 1, 1, 1}, X = 1 
Output: 4 

https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/
*/

function findCountOfSubsets(input, n, sum, memo = {}) {
  if (sum == 0) return 1;
  if (n == 0) return 0;

  let key = `${n}:${sum}`;

  if (key in memo) {
    return memo[key];
  }

  if (input[n - 1] > sum) {
    memo[key] = findCountOfSubsets(input, n - 1, sum);
  } else {
    let includeItem = findCountOfSubsets(input, n - 1, sum - input[n - 1]);
    let excludeItem = findCountOfSubsets(input, n - 1, sum);

    memo[key] = excludeItem + includeItem;
  }

  return memo[key];
}

let input = [1, 2, 3, 3];
let n = input.length;
let sum = 6;
let result = findCountOfSubsets(input, n, sum);
console.log('Result : ', result);
