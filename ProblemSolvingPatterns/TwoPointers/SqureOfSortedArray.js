/*
 Given an integer array nums sorted in non - decreasing order, return an array of the squares of each number sorted in non - decreasing order.
 
 Example 1:
 Input: nums = [-4,-1,0,3,10]
 Output: [0,1,9,16,100]
 Explanation: After squaring, the array becomes [16,1,0,9,100].
 After sorting, it becomes [0,1,9,16,100].
 
 Example 2:
 Input: nums = [-7,-3,2,3,11]
 Output: [4,9,9,49,121]
 
 */

/**************************************/
/************* In Build Func Approach *****************/
/**************************************/

/*
 function sortedSquares(numsArr) {
   let output = [];
   for (let i = 0; i < numsArr.length; i++) {
     const element = numsArr[i];
     output.push(numsArr[i] ** 2);
   }
   output.sort((a, b) => a - b);
 
   return output;
 }
 
 let input1 = [-4, -1, 0, 3, 10];
 let result1 = sortedSquares(input1);
 console.log('Result : ', result1);
 */

/**************************************/
/************* TWO POINTER SOLUTION *****************/
/**************************************/

function sortedSquares(numsArr) {
  let result = new Array(numsArr.length);
  let left = 0;
  let right = numsArr.length - 1;
  let index = numsArr.length - 1;

  while (left <= right) {
    let leftSquare = numsArr[left] ** 2;
    let rightSquare = numsArr[right] ** 2;

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }
  return result;
}

let input2 = [-4, -1, 0, 3, 10];
let result2 = sortedSquares(input2);
console.log('Result : ', result2);

/**************************************/
/************* TWO POINTER SOLUTION 2 *****************/
/**************************************/

/*
  function sortedSquares(numsArr) {
    let result = [];
    let left = 0;
    let right = numsArr.length - 1;
  
    while (left <= right) {
      let leftSquare = numsArr[left] ** 2;
      let rightSquare = numsArr[right] ** 2;
  
      if (leftSquare > rightSquare) {
        result.push(leftSquare);
        left++;
      } else {
        result.push(rightSquare);
        right--;
      }
    }
    return result.reverse();
  }
  
  let input3 = [-4, -1, 0, 3, 10];
  let result3 = sortedSquares(input3);
  console.log('Result : ', result3);
  */
