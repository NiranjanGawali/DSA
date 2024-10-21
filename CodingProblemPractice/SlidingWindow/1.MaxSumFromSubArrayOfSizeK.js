/*

Find the maximum sum of sub array of size window of k

*/

function findMaxSubArraySum(nums, k) {
  if (k > nums.length) {
    return null;
  }

  let start = 0;
  let end = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;

  while (end < nums.length) {
    currentSum += nums[end];
    if (end - start + 1 === k) {
      maxSum = Math.max(currentSum, maxSum);
      currentSum -= nums[start];
      start++;
    }

    end++;
  }

  return maxSum;
}

let nums = [1, 5, 4, 2, 9, 9, 9],
  k = 3;

let result = findMaxSubArraySum(nums, k);
console.log('Result : ', result);
// Output: 27

/*
Time Complexity: O(n) - n is length of the array
Space Complexity: O(1)
*/
