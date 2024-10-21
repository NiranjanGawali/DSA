/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length

https://leetcode.com/problems/sliding-window-maximum/description/

*/

// Method 1: Using two pointer approach

function findMaximumValueOfSubArray(nums, k) {
  if (k > nums.length) {
    let maxElt = nums.sort((a, b) => b - a)[0]; // if window size is greater than length nums array
    return maxElt;
  }

  let results = [];
  let start = 0;
  let end = 0;
  let maxElements = [];

  while (end < nums.length) {
    while (
      maxElements.length > 0 &&
      maxElements[maxElements.length - 1] < nums[end]
    ) {
      maxElements.pop(); // If the last element of maxElemetns array is lesser than nums array field of given index then remove it from the maxElements array
    }

    maxElements.push(nums[end]); // Pushing elements in teh array here our logic is that first element of the array should be largest element of that array

    // adding condition for the given window size.
    if (end - start + 1 === k) {
      results.push(maxElements[0]);

      if (nums[start] === maxElements[0]) {
        maxElements.shift(); // If the start index element is equal to the largest element of maxElements array then remove it from the max elemetns array
      }

      start++;
    }

    end++;
  }

  return results;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

let result = findMaximumValueOfSubArray(nums, k);
console.log('Result : ', result);

/*
Time Complexity: O(n) - n is length of the array
Space Complexity: O(n) - n is length of the array
*/

// Method 2
/*
function findMaximumValueOfSubArray(nums, k) {
  if (k > nums.length) {
    let maxElt = nums.sort((a, b) => b - a)[0]; // if window size is greater than length nums array
    return maxElt;
  }

  let start = 0;
  let end = 0;
  let results = [];

  while (end < nums.length) {
    if (end - start + 1 === k) {
      let temp = nums.slice(start, end + 1);
      results.push(Math.max(...temp));

      start++;
    }
    end++;
  }

  return results;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

let result = findMaximumValueOfSubArray(nums, k);
console.log('Result : ', result);

/*
Time Complexity: O(n * k) - n is length of the array and k is length of sub array
Space Complexity: O(n) - n is length of the array
*/
