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

function isSubSetPresent(arr, n, sum, memo = {}) {
  if (sum === 0) return true;
  if (n === 0) return false;

  let key = `${n}:${sum}`;

  if (key in memo) {
    return memo[key];
  }

  if (arr[n - 1] > sum) {
    memo[key] = isSubSetPresent(arr, n - 1, sum);
  } else {
    let includeItem = isSubSetPresent(arr, n - 1, sum - arr[n - 1]);
    let excludeItem = isSubSetPresent(arr, n - 1, sum);
    memo[key] = includeItem || excludeItem;
  }

  return memo[key];
}

function main(arr) {
  let n = arr.length;
  let arrSum = arr.reduce((acc, elt) => acc + elt, 0);

  console.log(`Now we are looking for range from 0 to ${arrSum}`);

  console.log(
    `Now need to find the elements in the above mentioned range where array size and 3 and elements exists in the given arrays, thats output we are getting from the isSubSetPresent function`
  );

  let subSetArr = [];

  for (let i = 0; i <= arrSum; i++) {
    let temp = isSubSetPresent(arr, n, i);
    if (temp) subSetArr.push(i);
  }

  // We need to find the largest element from the first half of array, as if we check the array first half element is equal to total sum - element from second half.

  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < subSetArr.length / 2; i++) {
    if (maxNum < subSetArr[i]) maxNum = subSetArr[i];
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
