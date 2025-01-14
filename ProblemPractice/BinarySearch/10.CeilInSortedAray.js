/*

Given a sorted array and a value x, the ceiling of x is the smallest element in array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. 
Assume than the array is sorted in non-decreasing order. Write efficient functions to find floor and ceiling of x.

Examples :

For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 0:    floor doesn't exist in array,  ceil  = 1
For x = 1:    floor  = 1,  ceil  = 1
For x = 5:    floor  = 2,  ceil  = 8
For x = 20:   floor  = 19,  ceil doesn't exist in array

*/

function findCeil(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ceilResult = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] > target) {
      end = mid - 1;
      ceilResult = arr[mid];
    } else {
      start = mid + 1;
    }
  }

  return ceilResult;
}

let arr = [1, 2, 8, 10, 10, 12, 19],
  x = 11;

let result = findCeil(arr, x);
console.log('Result : ', result);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
