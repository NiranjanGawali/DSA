/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.
 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

Example 2:
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrderAverage(root) {
  if (!root) return [];

  let results = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelLength = queue.length;
    let levelAverage = 0;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      levelAverage += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(levelAverage / levelLength);
  }
  return results;
}

let treeNode = new Node(3);
treeNode.left = new Node(9);
treeNode.right = new Node(20);
treeNode.right.left = new Node(15);
treeNode.right.right = new Node(7);

let result = levelOrderAverage(treeNode);
console.log(`Result : ${JSON.stringify(result)}`);

// Expected output : [3, 14.5, 11].

// Time and Space comlexity are 0(n)
