function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  let combinedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combinedArray.push(arr1[i]);
      i++;
    } else {
      combinedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    combinedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combinedArray.push(arr2[j]);
    j++;
  }
  return combinedArray;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midIndex));
  let right = mergeSort(arr.slice(midIndex));
  return merge(left, right);
}

let originalArray = [3, 1, 4, 2];
let sortedArray = mergeSort(originalArray);

console.log('Original Array:', originalArray);
console.log('\nSorted Array:', sortedArray);
