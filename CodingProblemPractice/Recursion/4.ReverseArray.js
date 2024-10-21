//4. Reverse the array

function insertNumber(arr, temp) {
  if (arr.length === 0) {
    arr.push(temp);
    return;
  }

  let val = arr.pop();
  insertNumber(arr, temp);
  arr.push(val);
}

function reverseArray(arr) {
  if (arr.length <= 1) {
    return;
  }

  let temp = arr.pop();
  reverseArray(arr);
  insertNumber(arr, temp);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
reverseArray(arr);
console.log('Reversed Array : ', arr);
