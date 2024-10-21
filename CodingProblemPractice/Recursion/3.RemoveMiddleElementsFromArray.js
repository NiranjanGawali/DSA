// Remove middle element from the array

function deleteMiddleElement(arr, middleIndex) {
  let arrLen = arr.length;
  if (arrLen === middleIndex) {
    arr.pop();
    return;
  }

  let temp = arr.pop();
  deleteMiddleElement(arr, middleIndex);
  arr.push(temp);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let middleIndex = Math.floor(arr.length / 2) + 1;

deleteMiddleElement(arr, middleIndex);
console.log('Array after delete : ', arr);
