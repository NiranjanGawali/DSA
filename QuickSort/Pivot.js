function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(arr, pivotIndex = 0, lastIndex = arr.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= arr.length; i++) {
    if (arr[i] < arr[pivotIndex]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, pivotIndex, swapIndex);
  return swapIndex;
}

let myArray = [4, 6, 1, 7, 3, 2, 5];
pivot(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 2, 1, 3, 4, 6, 7, 5 ]

*/
