/*

Below is the step-by-step algorithm for Binary Search:

Divide the search space into two halves by finding the middle index “mid”. 
Compare the middle element of the search space with the key. 
If the key is found at middle element, the process is terminated.
If the key is not found at middle element, choose which half will be used as the next search space.
If the key is smaller than the middle element, then the left side is used for next search.
If the key is larger than the middle element, then the right side is used for next search.
This process is continued until the key is found or the total search space is exhausted.

input = [1,2,3,4,5,6,7,8]
task : return the index of given number in this case 2
output = 1

*/

function findNumberIndex(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1; // Return -1 if the number is not found
}

let input = [1, 2, 3, 4, 5, 6, 7, 8];
let num = 7;
let result = findNumberIndex(input, num);
console.log('Result : ', result);

/**
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
