/*
Given an array arr[] of size N and a given difference diff, the task is to count the number of partitions that we can perform such that the difference between the sum of the two subsets is equal to the given difference.

Note: A partition in the array means dividing an array into two parts say S1 and S2 such that the union of S1 and S2 is equal to the original array and each element is present in only of the subsets.

Examples:

Input: N = 4, arr[] = [5, 2, 6, 4], diff = 3
Output: 1
Explanation: We can only have a single partition which is shown below:
{5, 2} and {6, 4} such that S1 = 7 and S2 = 10 and thus the difference is 3

Input: N = 5, arr[] = [1, 2, 3, 1, 2], diff = 1
Output: 5
Explanation: We can have five partitions which is shown below
{1, 3, 1} and {2, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4

https://www.geeksforgeeks.org/count-of-subsets-with-given-difference/
*/

function findCountOfSubsets(input, n, sum, memo = {}) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  let key = `${n}:${sum}`;

  if (key in memo) {
    return memo[key];
  }

  if (input[n - 1] > sum) {
    memo[key] = findCountOfSubsets(input, n - 1, sum);
  } else {
    let excludeItem = findCountOfSubsets(input, n - 1, sum);
    let includeItem = findCountOfSubsets(input, n - 1, sum - input[n - 1]);
    memo[key] = includeItem + excludeItem;
  }

  return memo[key];
}

function main(arr, diff) {
  /*
    The logic to find the sum is as below 

    s1 - s2 = diff
    s1 + s2 = arrSum 

    2s1 = diff + arrSum

    s1 = (diff + arrSum) / 2

    Now we need to find count of subsets in the given array where Sum is as per above formula s1. 
    So count of where subset sum is s1 will provide is the answer.
    */

  let arrSum = arr.reduce((acc, elt) => acc + elt, 0);

  let subsetSum1 = (diff + arrSum) / 2;

  let subsetCount = findCountOfSubsets(arr, arr.length, subsetSum1);

  return subsetCount;
}

let arr = [5, 2, 6, 4];
let diff = 3;
// Expected output : 1

// let arr = [1, 2, 3, 1, 2];
// let diff = 1;
// Expected output : 5

let result = main(arr, diff);
console.log('Result : ', result);