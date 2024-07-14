/*
The problem is to find the ceiling of a given number key in an array that is sorted in ascending order. The ceiling of key is defined as the smallest 
element in the array that is greater than or equal to key. If no such element exists in the array, the function should return -1.

Example 1:
Array: [-1, 0, 3, 5, 9, 12]
Key: 9
Ceiling: The smallest element in the array that is greater than or equal to 9.
Expected Output: 9 exists in the array at index 4, so the output should be 4.

Example 2:
Array: [-1, 0, 3, 5, 9, 12]
Key: 2
Ceiling: The smallest element in the array that is greater than or equal to 2.
Expected Output: There is no element in the array that is greater than or equal to 2. So, the output should be -1.

Example 3:
Array: [-1, 0, 3, 5, 9, 12]
Key: 15
Ceiling: The smallest element in the array that is greater than or equal to 15.
Expected Output: There is no element in the array that is greater than or equal to 15. So, the output should be -1.

*/

function findCeiling(nums, key) {
  let left = 0;
  let right = nums.length - 1;
  let ceilingIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === key) {
      return mid; // Found exact match, so this is the ceiling
    } else if (nums[mid] < key) {
      left = mid + 1;
    } else {
      ceilingIndex = mid; // Update potential ceiling index
      right = mid - 1;
    }
  }

  return ceilingIndex;
}

let nums = [-1, 0, 3, 5, 9, 12];
let key1 = 9;
console.log(findCeiling(nums, key1)); // Output: 4 (index of 9 in nums)

let key2 = 2;
console.log(findCeiling(nums, key2)); // Output: 2 (index of 3 in nums)

let key3 = 15;
console.log(findCeiling(nums, key3)); // Output: -1 (no ceiling found)
