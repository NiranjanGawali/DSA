/*
Problem Explanation:
Given a binary tree and a node, the task is to find the level order successor of the given node. 
The level order successor is defined as the node that appears immediately after the given node in the level order traversal of the tree.

For example:
        1
       / \
      2   3
     / \   \
    4   5   6
       /
      7

Here if give give input as 5 then output should be 6.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findSuccessor(root, key) {
  if (!root) return null;
  let found = false;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (found) return node.val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (node.val === key) found = true;
  }

  return null;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

let result1 = findSuccessor(root, 12);
if (result1 != null) console.log('Result 1 : ', result1);

let result2 = findSuccessor(root, 9);
if (result2 != null) console.log('Result 2 : ', result2);
