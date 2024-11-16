/*

Given a sorted array arr[] with possibly duplicate elements, the task is to find indexes of the first and last occurrences of an element x in the given array. 

Examples: 

Input : arr[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}, x = 5
Output : First Occurrence = 2 Last Occurrence = 5


Input : arr[] = {1, 3, 5, 5, 5, 5, 7, 123, 125 }, x = 7
Output : First Occurrence = 6 Last Occurrence = 6

https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/

*/

function findNumberIndex(arr, num, postition) {
  let start = 0;
  let end = arr.length - 1;
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      result = mid;
      if (postition === 'first') {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

function main(arr, x) {
  let firstOccurence = findNumberIndex(arr, x, 'first');
  let lastOccurence = findNumberIndex(arr, x, 'last');

  console.log('First Occurence : ', firstOccurence);
  console.log('Last Occurence : ', lastOccurence);
}

// let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125],
//   x = 5;

let arr = [1, 3, 5, 5, 5, 5, 7, 123, 125],
  x = 7;

main(arr, x);

/**
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
