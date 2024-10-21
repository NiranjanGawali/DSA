/*

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

https://leetcode.com/problems/fruit-into-baskets/description/

*/

function findMaxFruitsForBasket(fruits) {
  let start = 0;
  let end = 0;
  let maxFruits = Number.MIN_SAFE_INTEGER;
  let fruitMap = {};

  while (end < fruits.length) {
    let endFruit = fruits[end];
    fruitMap[endFruit] = (fruitMap[endFruit] || 0) + 1;

    // here 2 is number of basket
    while (Object.keys(fruitMap).length > 2) {
      let startFruit = fruits[start];
      if (startFruit in fruitMap) {
        fruitMap[startFruit]--;
        if (fruitMap[startFruit] === 0) {
          delete fruitMap[startFruit];
        }
      }
      start++;
    }

    if (Object.keys(fruitMap).length === 2) {
      maxFruits = Math.max(maxFruits, end - start + 1);
    }
    end++;
  }

  return maxFruits;
}

let fruits = [1, 2, 1];
// let fruits = [0, 1, 2, 2];
// let fruits = [1, 2, 3, 2, 2];

let result = findMaxFruitsForBasket(fruits);
console.log('Max fruits that can feet into the basket : ', result);

/*

Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(k), where k is the number of unique characters in the string (in the worst case, O(n)).

*/
