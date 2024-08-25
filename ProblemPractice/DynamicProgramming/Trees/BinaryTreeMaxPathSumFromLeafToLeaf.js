/*
Maximum path sum from leaf to leaf

If a binary tree is given, how to find Maximum path sum between two leaves of binary tree.

All should be numbers
The maximum sum path may or may not go through root.
For example, in the following binary tree, the maximum sum is 27(3 + 6 + 9 + 0 – 1 + 10). Expected time complexity is O(n).

  -15
 /  \
       5    6
      / \  / \
    -8  1  3  9
    / \       \ 
   2   6       0
       / \
      4  -1
  /
        10


https://www.geeksforgeeks.org/find-maximum-path-sum-two-leaves-binary-tree/
*/

function findMaxPathSum(node, result) {
  if (node === null) return 0; // Base condition: if node is null then return 0

  let left = findMaxPathSum(node.left, result); // Hypothesis : Moving the left node
  let right = findMaxPathSum(node.right, result); // Hypothesis : Moving the right node

  let temp = Math.max(left, right) + node.val; // Induction :  Its passing values to upper node in the tree, here we are finding the maximum of sum between max of left, right and node value

  if (node.left === null && node.right === null) {
    temp = Math.max(temp, node.val); // Only if its leaf node we are selecting it if its sum of max of left and right is less than node value
  }

  let ans = Math.max(temp, left + right + node.val); // Induction : If the node itself is candidate from which path is moved to right side of the tree. Finding ans which is max of temp and left + right and its node value
  result.maxElement = Math.max(ans, result.maxElement); // Induction : As we need to find largest answer hence maximum value is set to the variable.

  return temp; // We are returning temp here as we liked to moved to upper nodes so temp value is passed.
}

function main(rootNode) {
  let result = {
    maxElement: Number.MIN_SAFE_INTEGER,
  };

  findMaxPathSum(rootNode, result);
  return result.maxElement;
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// let root =  new Node(1);
// root.left =  new Node(2);
// root.right =  new Node(3);

let root = new Node(-15);
root.left = new Node(5);
root.right = new Node(6);
root.left.left = new Node(-8);
root.left.right = new Node(1);
root.left.left.left = new Node(2);
root.left.left.right = new Node(6);
root.right.left = new Node(3);
root.right.right = new Node(9);
root.right.right.right = new Node(0);
root.right.right.right.left = new Node(4);
root.right.right.right.right = new Node(-1);
root.right.right.right.right.left = new Node(10);

let result = main(root);
console.log('Binary Tree Maximum path sum is : ', result);
