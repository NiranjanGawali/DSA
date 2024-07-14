/*
John and his mother are shopping for toys in a store where each toy has a different price. John wants to maximize the number of toys he can buy, 
but there's a rule: he can only select toys that are placed consecutively in the store's lineup. Additionally, his mother has set a condition 
that he can only choose from two specific types of toys.

To better understand this scenario, imagine the toys are represented as a string of characters where each character corresponds to a 
different type of toy. For example, if the string of toys is "AABBCAA", it means:

A: Type A toy
B: Type B toy
C: Type C toy

John wants to select the longest consecutive sequence of toys that only contains types A and B, adhering to his mother's condition. 
In this example string ("AABBCAA"), the longest sequence he can choose is "AABB", which consists of 4 toys.

This is a variable sliding window problem

 */

function pickToys(toys, condition) {
  let maxToysLength = 0;
  let end = 0;
  let start = 0;
  let toysMap = {};

  while (end < toys.length) {
    let endChar = toys.charAt(end);
    toysMap[endChar] = (toysMap[endChar] || 0) + 1;

    while (Object.keys(toysMap).length > condition) {
      let startChar = toys.charAt(start);

      if (startChar in toysMap) {
        toysMap[startChar] -= 1;
        if (toysMap[startChar] === 0) {
          delete toysMap[startChar];
        }
      }

      start++;
    }

    if (Object.keys(toysMap).length === condition) {
      maxToysLength = Math.max(maxToysLength, end - start + 1);
    }
    end++;
  }
  return maxToysLength;
}

let str = 'abaccab';
let condition = 2;
let result = pickToys(str, 2);
console.log('Result : ', result);
