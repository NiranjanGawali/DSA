/*

Given an array arr[] having distinct numbers sorted in increasing order and the array has been right rotated (i.e, the last element will be cyclically shifted to the starting position of the array) k number of times, 
the task is to find the value of k.

Examples:  
Input: arr[] = {15, 18, 2, 3, 6, 12}
Output: 2
Explanation: Initial array must be {2, 3, 6, 12, 15, 18}. 
We get the given array after rotating the initial array twice.

Input: arr[] = {7, 9, 11, 12, 5}
Output: 4

Input: arr[] = {7, 9, 11, 12, 15};
Output: 0

*/

function findArrayRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;
  let n = arr.length;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2); // Corrected calculation of mid
    let nextMid = (mid + 1) % n; // if mid is last element of array
    let prevMid = (mid + n - 1) % n; // if mid is first element of array

    if (arr[mid] <= arr[nextMid] && arr[mid] <= arr[prevMid]) {
      return mid;
    } else if (arr[start] > arr[mid]) {
      // by this condition we check which part of arry is sorted and which is unsorted, we check further logic in unsorted array
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return 0;
}

// let arr = [15, 18, 2, 3, 6, 12];
let arr = [7, 9, 11, 12, 5];
// let arr = [7, 9, 11, 12, 15];

let result = findArrayRotationCount(arr);
console.log('Result : ', result);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
