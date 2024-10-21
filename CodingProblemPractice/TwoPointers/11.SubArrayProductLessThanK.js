/*

Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

Example 1:
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:
Input: nums = [1,2,3], k = 0
Output: 0
 
Constraints:
1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106


https://leetcode.com/problems/subarray-product-less-than-k/description/

*/

// Below is solution via two pointes, its similar to sliding window approach

function findSubarrayCountLessThanK(nums, k) {
  let product = 1;
  let left = 0;
  let right = 0;
  let count = 0;

  while (right < nums.length) {
    product *= nums[right];

    if (product >= k) {
      product /= nums[left];
      left++;
    }

    count += right - left + 1;
    right++;
  }

  return count;
}

let nums = [10, 5, 2, 6],
  k = 100;

let result = findSubarrayCountLessThanK(nums, k);
console.log('Result : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(1)
*/
