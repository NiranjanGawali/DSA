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

  return dp[n][sum];
}

function main(arr) {
  let n = arr.length;
  let sum = arr.reduce((acc, num) => acc + num, 0);

  let subSetArr = [];

  for (let i = 0; i <= sum; i++) {
    let temp = isSubSetPresent(arr, n, i);
    if (temp) {
      subSetArr.push(i);
    }
  }

  let maxNum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < subSetArr.length / 2; i++) {
    if (maxNum < subSetArr[i]) {
      maxNum = subSetArr[i];
    }
  }

  //   console.log('maxNum  : ', maxNum);

  /*
  s1 + s2 = arrSum
  s1 - s2 = diff
  
  s1 - (arrSum - s1) = diff

  diff = arrSum - 2s1
  */

  let diff = sum - 2 * maxNum;
  return diff;
}

let arr = [1, 6, 11, 5];
// let arr = [1, 5, 11, 5];

let result = main(arr);
console.log('Result : ', result);

/*

Here's the analysis of time and space complexity for the provided code that determines whether a subset of numbers can sum up to a given value.

### Time Complexity

1. **`isSubSetPresent` Function:**
   - This function uses dynamic programming to fill a 2D array `dp` of size `(n + 1) x (sum + 1)`, where:
     - `n` is the number of elements in the input array.
     - `sum` is the target sum.
   - The function iterates over each element and each possible sum, leading to a complexity of \(O(n \times \text{sum})\).

2. **`main` Function:**
   - The `main` function iterates through all sums from `0` to `sum`, calling `isSubSetPresent` for each value, which has a complexity of \(O(n \times \text{sum})\) for each call.
   - This gives a total time complexity of \(O(n \times \text{sum}^2)\) since you call `isSubSetPresent` `sum` times.

3. **Overall Time Complexity:**
   - Therefore, the overall time complexity is \(O(n \times \text{sum}^2)\).

### Space Complexity

1. **Dynamic Programming Table:**
   - The `dp` table has a size of \(O(n \times \text{sum})\) to store results of subproblems.

2. **Auxiliary Space:**
   - The rest of the space used in the algorithm (like variables, arrays for `subSetArr`, etc.) is not significant compared to the `dp` table.

3. **Overall Space Complexity:**
   - Thus, the overall space complexity is \(O(n \times \text{sum})\).

### Conclusion

In summary, the code effectively determines the subset sums using a dynamic programming approach, with a time complexity of \(O(n \times \text{sum}^2)\) and space complexity of \(O(n \times \text{sum})\). 
This approach is efficient for moderate sizes of `n` and `sum`, but can become resource-intensive for larger values.

*/
