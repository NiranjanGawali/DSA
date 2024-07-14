/*
 *
 * Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
 * Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
 *
 */

function findMaxInBitonicArray(arr) {
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
  return arr[start];
}

console.log(findMaxInBitonicArray([1, 3, 8, 12, 4, 2]));
