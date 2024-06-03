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

let myArray1 = [1, 3, 7, 8];
let myArray2 = [2, 4, 5, 6];
console.log(merge(myArray1, myArray2));

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/
