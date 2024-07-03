/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findMinimumDepth(root) {
  let minimumDepth = 0;

  let queue = [root];

  while (queue.length > 0) {
    minimumDepth++;
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();

      if (node.left === null && node.right === null) {
        return minimumDepth;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return 0;
}

let treeNode = new Node(3);
treeNode.left = new Node(9);
treeNode.right = new Node(20);
treeNode.right.left = new Node(15);
treeNode.right.right = new Node(7);

let result = findMinimumDepth(treeNode);
console.log(`Result : ${JSON.stringify(result)}`);

// const root = new Node(12);
// root.left = new Node(7);
// root.right = new Node(1);
// root.right.left = new Node(10);
// root.right.right = new Node(5);
// console.log(`Tree Minimum Depth: ${findMinimumDepth(root)}`);
// root.left.left = new Node(9);
// root.right.left.left = new Node(11);
// console.log(`Tree Minimum Depth: ${findMinimumDepth(root)}`);
