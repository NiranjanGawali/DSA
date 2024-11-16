/*

Given a sorted array arr[] of size n, some elements of array are moved to either of the adjacent positions, i.e., arr[i] may be present at arr[i+1] or arr[i-1] 
i.e. arr[i] can only be swapped with either arr[i+1] or arr[i-1]. The task is to search for an element in this array.

Examples : 

Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, x = 40
Output: 2 
Explanation: Output is index of 40 in given array i.e. 2


Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, x = 90
Output: -1
Explanation: -1 is returned to indicate the element is not present


https://www.geeksforgeeks.org/search-almost-sorted-array/

*/

function findElementIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let n = arr.length;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid + 1] <= n && arr[mid + 1] === target) {
      return mid + 1;
    } else if (arr[mid - 1] >= 0 && arr[mid - 1] === target) {
      return mid - 1;
    }

    if (arr[mid] > target) {
      end = mid - 2;
    } else {
      start = mid + 2;
    }
  }

  return -1;
}

let arr = [10, 3, 40, 20, 50, 80, 70],
  x = 50;

let result = findElementIndex(arr, x);
console.log('Result : ', result);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
