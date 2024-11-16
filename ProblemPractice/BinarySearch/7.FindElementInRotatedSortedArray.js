/*

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., 
nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

https://leetcode.com/problems/search-in-rotated-sorted-array/description/

*/

function findElementIndex(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

// 1,2,3,4,5,6,7

// Here we are using finding the roatatin count, which is also minimum value index, in a way start of array its index is also number of times we rotated the array
function findMidElementIndex(arr) {
  let start = 0;
  let end = arr.length - 1;
  let n = arr.length;

  while (start <= end) {
    if (arr[start] < arr[end]) {
      // If array is already sorted then return start index
      return start;
    }

    let mid = Math.floor(start + (end - start) / 2); // Better way to calculate the mid, avoids interger overflow error
    let nextMid = (mid + 1) % n; // if mid is last element of array
    let prevMid = (mid + n - 1) % n; // if mid is first element of array

    if (arr[mid] <= arr[nextMid] && arr[mid] <= arr[prevMid]) {
      return mid;
    } else if (arr[start] >= arr[mid]) {
      // by this condition we check which part of arry is sorted and which is unsorted, we check further logic in unsorted array
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return 0;
}

function main(unsortedArray, target) {
  let minValueIndex = findMidElementIndex(unsortedArray);

  if (
    target >= unsortedArray[0] &&
    target <= unsortedArray[minValueIndex - 1]
  ) {
    return findElementIndex(unsortedArray, 0, minValueIndex - 1, target);
  }

  if (
    target >= unsortedArray[minValueIndex] &&
    target <= unsortedArray[unsortedArray.length - 1]
  ) {
    return findElementIndex(
      unsortedArray,
      minValueIndex,
      unsortedArray.length - 1,
      target
    );
  }
  return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 7;

// let nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 3;

// let nums = [1],
//   target = 0;

let result = main(nums, target);
console.log(`Index of target '${target}' is ::: ${result}`);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
