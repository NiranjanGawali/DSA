/*
Given a set of integers, the task is to divide it into two sets S1 and S2 such that the absolute difference between their sums is minimum. 
If there is a set S with n elements, then if we assume Subset1 has m elements, Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2)) should be minimum.

Example: 

Input:  arr[] = {1, 6, 11, 5} 
Output: 1
Explanation:
Subset1 = {1, 5, 6}, sum of Subset1 = 12 
Subset2 = {11}, sum of Subset2 = 11        

https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/
*/

function isSubSetPresent(arr, n, sum) {
  let dp = Array(n + 1)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = dp[i - 1][j - arr[i - 1]];
        dp[i][j] = includeItem || excludeItem;
      }
    }
  }

  return dp[n]; // here we are returning row of 2d array wher size of array is n (highest) and sum ranges from 0 - sum
}

function main(arr) {
  let n = arr.length;
  let arrSum = arr.reduce((acc, elt) => acc + elt, 0);

  console.log(`Now we are looking for range from 0 to ${arrSum}`);

  console.log(
    `Now need to find the elements in the above mentioned range where array size and 3 and elements exists in the given arrays, thats output we are getting from the isSubSetPresent function`
  );

  let subSetArr = isSubSetPresent(arr, n, arrSum);

  // We need to find the largest element from the first half of array, as if we check the array first half element is equal to total sum - that given element.

  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < subSetArr.length / 2; i++) {
    if (subSetArr[i]) {
      if (maxNum < i) {
        maxNum = i;
      }
    }
  }

  /* 
  So  the final formula becomes 
  s1 = arrSum - s1
  arrSum - s1 (-s1) = diff
  arrSum - 2s1 = diff
  */

  let minimumSubsetDiff = arrSum - 2 * maxNum;
  return minimumSubsetDiff;
}

let arr = [1, 6, 11, 5];

let result = main(arr);
console.log('Result : ', result);
