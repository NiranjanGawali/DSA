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
    memo[key] = isSubSetPresent(arr, n - 1, sum, memo);
  } else {
    let excludeItem = isSubSetPresent(arr, n - 1, sum, memo);
    let includeItem = isSubSetPresent(arr, n - 1, sum - arr[n - 1], memo);
    memo[key] = includeItem || excludeItem;
  }

  return memo[key];
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

Here's a more concise summary of the time and space complexity of the provided code:

### Time Complexity

- **`isSubSetPresent` Function:** 
  - With memoization, the time complexity is \(O(n \times \text{sum})\), where:
    - `n` is the number of elements in the array.
    - `sum` is the target sum (up to the total sum of the array).
  - This is due to the function exploring all unique combinations of `n` and `sum` once.

- **`main` Function:** 
  - It iterates over all possible sums from `0` to `sum`, calling `isSubSetPresent` for each value.
  - This adds an additional factor of \(O(\text{sum})\).
  
- **Overall Time Complexity:** 
  - Combining both functions gives \(O(n \times \text{sum})\).

### Space Complexity

- **Recursive Call Stack:** 
  - The maximum depth of recursion can go up to `n`, leading to \(O(n)\) space for the call stack.

- **Memoization Storage:** 
  - The memoization uses a two-dimensional object to store results for each unique state, resulting in \(O(n \times \text{sum})\) space.

- **Overall Space Complexity:** 
  - Thus, the total space complexity is \(O(n \times \text{sum})\).

### Conclusion

In summary, the code efficiently checks for the presence of subsets that sum to various values using memoization, optimizing both time and space complexities to \(O(n \times \text{sum})\). 
This approach is significantly more efficient than the naive \(O(2^n)\) solution, particularly for larger input sizes.

*/
