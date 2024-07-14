function findPeakPoint(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function binarySearchAscending(arr, key, start, end) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function binarySearchDescending(arr, key, start, end) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function searchBitonicArray(arr, key) {
  let n = arr.length;

  let peakIndex = findPeakPoint(arr);
  console.log('peak point ', peakIndex);

  let result = binarySearchAscending(arr, key, 0, peakIndex);
  if (result !== -1) {
    return result;
  }

  result = binarySearchDescending(arr, key, peakIndex + 1, n - 1);
  return result;
}

let arr1 = [1, 3, 8, 12, 4, 2];
let key1 = 4;
console.log(searchBitonicArray(arr1, key1)); // Output: 4

let arr2 = [3, 8, 12, 4, 2, 1];
let key2 = 4;
console.log(searchBitonicArray(arr2, key2)); // Output: 3

let arr3 = [1, 3, 8, 12, 11, 9, 6, 4];
let key3 = 11;
console.log(searchBitonicArray(arr3, key3)); // Output: 4

let arr4 = [1, 3, 8, 12, 11, 9, 6, 4];
let key4 = 10;
console.log(searchBitonicArray(arr4, key4)); // Output: -1
