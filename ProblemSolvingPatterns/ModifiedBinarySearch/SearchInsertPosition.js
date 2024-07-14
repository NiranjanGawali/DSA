/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

// In option we need to find position equal or lesser than the given key and return the number greater than it so it will be a position.

function searchInsertPosition(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let floorIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      floorIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return floorIndex + 1;
}

let result1 = searchInsertPosition([4, 6, 10], 6);
console.log('Result 1 : ', result1);

let result2 = searchInsertPosition([1, 3, 8, 10, 15], 12);
console.log('Result 2 : ', result2);

let result3 = searchInsertPosition([4, 6, 10], 17);
console.log('Result 3 : ', result3);

let result4 = searchInsertPosition([4, 6, 10], -1); // -1 will be inserted at 0th index
console.log('Result 4 : ', result4);
