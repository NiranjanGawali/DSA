/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findMaximumDepth(root) {
  if (!root) {
    return 0;
  }
  let maximumDepth = 0;

  let queue = [root];

  while (queue.length > 0) {
    maximumDepth++;
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return maximumDepth;
}

let treeNode = new Node(3);
treeNode.left = new Node(9);
treeNode.right = new Node(20);
treeNode.right.left = new Node(15);
treeNode.right.right = new Node(7);

let result = findMaximumDepth(treeNode);
console.log(`Result : ${JSON.stringify(result)}`);
