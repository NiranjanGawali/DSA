/*

input = [8,7,6,5,4,3,2,1]
num = 5
output = 3

*/

function findNumberIndex(arr, num) {
  let end = arr.length - 1;
  let start = 0;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

let input = [8, 7, 6, 5, 4, 3, 2, 1];
let num = 7;
let result = findNumberIndex(input, num);
console.log('Result : ', result);

/**
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
