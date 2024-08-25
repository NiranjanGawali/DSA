/*
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in 
the subarray is strictly less than k.

Example 1:
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:
Input: nums = [1,2,3], k = 0
Output: 0
 
*/

function subarrayProductLessThanK(input, target) {
  let product = 1;
  let count = 0;
  left = 0;
  right = 0;

  while (right < input.length) {
    let rightElement = input[right];
    product *= rightElement;

    if (product >= target) {
      let leftElement = input[left];
      product /= leftElement;
      left++;
    }

    count += right - left + 1;

    right++;
  }
  return count;
}

let input = [10, 5, 2, 6],
  target = 100;
let result = subarrayProductLessThanK(input, target);
console.log('Result : ', result); // Output: 8

// This solution is similar to the Sliding window solution