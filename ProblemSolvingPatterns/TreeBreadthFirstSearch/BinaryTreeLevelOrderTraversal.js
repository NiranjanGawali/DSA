/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  console.log('LEVEL ORDER ROOT');
  console.log(root);
  if (!root) {
    return [];
  }
  let results = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      levelNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(levelNodes);
  }
  return results;
}

let treeNode = new Node(3);
treeNode.left = new Node(9);
treeNode.right = new Node(20);
treeNode.right.left = new Node(15);
treeNode.right.right = new Node(7);

let result = levelOrder(treeNode);
console.log(`Result : ${JSON.stringify(result)}`);
// Expected output : [[3],[9,20],[15,7]]

// Time and Space comlexity are 0(n)
