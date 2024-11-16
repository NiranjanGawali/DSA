/*

Given a bitonic sequence of n distinct elements, and an integer x, the task is to write a program to find given element x in the bitonic sequence in O(log n) time. 
A Bitonic Sequence is a sequence of numbers that is first strictly increasing then after a point decreasing.

Examples: 
Input :  arr[] = {-3, 9, 18, 20, 17, 5, 1}, key = 20
Output : Found at index 3

Input :  arr[] = {5, 6, 7, 8, 9, 10, 3, 2, 1}, key = 30
Output : Not Found

*/

function binarySearchElement(start, end, arr, key, isAscending) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      if (isAscending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (isAscending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

function findBitonicIndex(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid === 0) {
      if (arr[0] > arr[1]) return 0;
      else return 1;
    }

    if (mid === arr.length - 1) {
      if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;
      else return arr.length - 2;
    }

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid - 1] > arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function searchElement(arr, key) {
  let bitonicIndex = findBitonicIndex(arr);
  if (arr[bitonicIndex] === key) {
    return bitonicIndex;
  }
  let ascendingSearch = binarySearchElement(0, bitonicIndex, arr, key, true);
  if (ascendingSearch !== -1) {
    return ascendingSearch;
  }
  return binarySearchElement(bitonicIndex + 1, arr.length - 1, arr, key, false);
}

let arr = [-3, 9, 18, 20, 17, 5, 1],
  key = 1;

// let arr = [5, 6, 7, 8, 9, 10, 3, 2, 1],
//   key = 30;

let result = searchElement(arr, key);
console.log('Result : ', result);

/*

Time Complexity: O(log n)
Space Complexity: O(1)

*/
