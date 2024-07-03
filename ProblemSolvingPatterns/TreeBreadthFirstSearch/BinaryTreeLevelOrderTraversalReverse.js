/*
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
(i.e., from left to right, level by level from leaf to root).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

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

function levelOrderReverse(root) {
  if (!root) {
    return [];
  }

  let results = [];
  let queue = [root];
  while (queue.length > 0) {
    let levelsLength = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelsLength; i++) {
      let node = queue.shift();
      levelNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.unshift(levelNodes);
  }
  return results;
}

let treeNode = new Node(3);
treeNode.left = new Node(9);
treeNode.right = new Node(20);
treeNode.right.left = new Node(15);
treeNode.right.right = new Node(7);

let result = levelOrderReverse(treeNode);
console.log(`Result : ${JSON.stringify(result)}`);

// Time and Space comlexity are 0(n)
