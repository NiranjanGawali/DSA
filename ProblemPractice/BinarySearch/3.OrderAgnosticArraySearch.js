/**
 Difference here is that we don't know if the array is in ascending order or in decending order

 Remaining logic remains same
 */

function findNumberIndex(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  let isAscendingOrder = arr[0] < arr[1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      if (isAscendingOrder) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (isAscendingOrder) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8];
// let input = [8, 7, 6, 5, 4, 3, 2, 1];
let num = 2;
let result = findNumberIndex(input, num);
console.log('Result : ', result);

/**
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
