/*

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, 
just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []


THIS IS MEDIUM LEVEL PROBLEM

*/

class Node {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

function connectLevelOrder(root) {
  if (!root) {
    return null;
  }

  let queue = [root];

  while (queue.length > 0) {
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();

      if (i < levelLength - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
}

// Example usage:
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

connectLevelOrder(root);
printTreeWithNext(root);

// Function to print the tree with next pointers including null checks
function printTreeWithNext(root) {
  if (!root) return;

  let currentLevel = root;
  while (currentLevel) {
    let node = currentLevel;
    while (node) {
      process.stdout.write(node.val.toString());
      if (node.next) {
        process.stdout.write(` -> `);
      } else {
        process.stdout.write(` -> null`);
      }
      node = node.next;
    }
    process.stdout.write(`\n`);
    // Move to the next level (start from the leftmost node of the next level)
    currentLevel = currentLevel.left;
  }
}
