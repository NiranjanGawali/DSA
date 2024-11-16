/*

Given a sorted array arr[] and an integer target, the task is to find the number of occurrences of target in given array.

Examples:

Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
Output: 4
Explanation: 2 occurs 4 times in the given array.


Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
Output: 0
Explanation: 4 is not present in the given array.

https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/

*/

function findNumberIndex(arr, target, position) {
  let start = 0;
  let end = arr.length - 1;

  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result = mid;
      if (position === 'first') {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

function main(arr, target) {
  let firstOccurence = findNumberIndex(arr, target, 'first');
  let lastOccurence = findNumberIndex(arr, target, 'last');

  let countOfOccurence = lastOccurence - firstOccurence + 1;

  console.log('Count of occurence : ', countOfOccurence);
}

let arr = [1, 1, 2, 2, 2, 2, 3],
  target = 2;

main(arr, target);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
