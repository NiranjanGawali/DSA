/*

Diameter of Tree
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 4, which is the length of the path [4,2,1,3] or [5,2,1,3].

https://www.geeksforgeeks.org/diameter-of-a-binary-tree/

*/

function findMaximumDiameter(node, result) {
  if (node === null) return 0; // Base condition: if node is null then return 0

  let left = findMaximumDiameter(node.left, result); // Hypothesis : Moving the left node
  let right = findMaximumDiameter(node.right, result); // Hypothesis : Moving the right node

  let temp = Math.max(left, right) + 1; // Induction : If Node is passing to upper node in the tree, so its giving lartest path to reach upper node including itself (thats why 1 is added)
  let ans = Math.max(temp, left + right + 1); // Induction : If the node itself is candidate from which path is moved to right side of the tree, hence we have consider both its left side, right side and including itself (thats why 1 is added)
  result.maxElement = Math.max(result.maxElement, ans); // Induction : As we need to find largest answer hence maximum value is set to the variable.

  return temp; // We are returning temp here as we liked to moved to upper nodes so temp value is passed.
}

function main(rootNode) {
  let result = {
    maxElement: Number.MIN_SAFE_INTEGER,
  };

  findMaximumDiameter(rootNode, result);
  return result.maxElement;
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let result = main(root);
console.log('Binary Tree Diameter is : ', result);
