/**
 You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits 
 where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. 
The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
 

Constraints:

1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length
 */

function addFruitesInToTheBasket(inputArr) {
  let start = 0;
  let end = 0;
  let maxNumberOfFruits = Number.MIN_SAFE_INTEGER;
  let fruitMap = {};

  while (end < inputArr.length) {
    let endChar = inputArr[end];
    fruitMap[endChar] = (fruitMap[endChar] || 0) + 1;

    while (Object.keys(fruitMap).length > 2) {
      let startChar = inputArr[start];
      fruitMap[startChar] -= 1;
      if (fruitMap[startChar] == 0) {
        delete fruitMap[startChar];
      }
      start++;
    }

    if (Object.keys(fruitMap).length == 2) {
      maxNumberOfFruits = Math.max(maxNumberOfFruits, end - start + 1);
    }

    end++;
  }
  return maxNumberOfFruits;
}

// let input = [1, 2, 1];
let input = [1, 2, 3, 2, 2];
// let input = [0, 1, 2, 2];

let result = addFruitesInToTheBasket(input);

console.log('Result : ', result); // Output : 4
