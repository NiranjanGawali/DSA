/**
Given a set of non-negative integers and a value sum, the task is to check if there is a subset of the given set whose sum is equal to the given sum. 

Examples: 

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output: True
Explanation: There is a subset (4, 5) with sum 9.

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
Output: False
Explanation: There is no subset that add up to 30.

*/

function isSubsetSumPresent(input, n, sum, memo = {}) {
  if (sum === 0) return true;
  if (n === 0) return false;

  let key = `${n}:${sum}`;

  if (key in memo) {
    return memo[key];
  }

  if (input[n - 1] > sum) {
    return isSubsetSumPresent(input, n - 1, sum, memo);
  } else {
    let includeItem = isSubsetSumPresent(
      input,
      n - 1,
      sum - input[n - 1],
      memo
    );
    let excludeItem = isSubsetSumPresent(input, n - 1, sum, memo);

    return includeItem || excludeItem;
  }
}

let input = [3, 34, 4, 12, 5, 2],
  sum = 9;
let n = input.length;

let result = isSubsetSumPresent(input, n, sum);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(n×sum)  because we are solving each subproblem only once using memoization.
Space Complexity: 𝑂(n×sum) due to the memoization table and recursion stack.

*/
