/*

Given a sorted array and a value x, the floor of x is the largest element in the array smaller than or equal to x. Write efficient functions to find the floor of x
Examples:

Input: arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
Output: 2
Explanation: 2 is the largest element in 
arr[] smaller than 5

Input: arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 20
Output: 19
Explanation: 19 is the largest element in
arr[] smaller than 20

Input : arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 0
Output : -1
Explanation: Since floor doesn’t exist, output is -1.

https://www.geeksforgeeks.org/floor-in-a-sorted-array/

*/

function findFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      result = arr[mid];
      start = mid + 1;
    }
  }

  return result;
}

let arr = [1, 2, 8, 10, 10, 12, 19],
  x = 5;

// let arr = [1, 2, 8, 10, 10, 12, 19],
//   x = 20;

// let arr = [1, 2, 8, 10, 10, 12, 19],
//   x = 0;

let result = findFloor(arr, x);

console.log('Result : ', result);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
