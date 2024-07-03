/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

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

function levelOrderZigzag(root) {
  if (!root) return [];

  let leftToRight = true;

  let results = [];
  let queue = [root];

  while (queue.length > 0) {
    console.log('leftToRight ', leftToRight);
    let levelLength = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      if (leftToRight) {
        levelNodes.push(node.val);
      } else {
        levelNodes.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(levelNodes);
    leftToRight = !leftToRight;
  }
  return results;
}

let treeNode = new Node(3);
treeNode.left = new Node(9);
treeNode.right = new Node(20);
treeNode.right.left = new Node(15);
treeNode.right.right = new Node(7);

let result = levelOrderZigzag(treeNode);
console.log(`Result : ${JSON.stringify(result)}`);

// Time and Space comlexity are 0(n)
