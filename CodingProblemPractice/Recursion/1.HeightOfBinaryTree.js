// Find the height of the binary tree

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findHeightOfBinaryTree(node) {
  if (node === null) {
    return 0;
  }

  let leftValue = findHeightOfBinaryTree(node.left);
  let rightValue = findHeightOfBinaryTree(node.right);

  return Math.max(leftValue, rightValue) + 1;
}

let treeNode = new TreeNode(7);
treeNode.left = new TreeNode(5);
treeNode.right = new TreeNode(9);
treeNode.left.left = new TreeNode(3);
treeNode.left.right = new TreeNode(6);

let result = findHeightOfBinaryTree(treeNode);
console.log('Result : ', result);

/*
       7
      / \
     5   9
    / \
   3   6
*/

/*

Time Complexity: O(n) - where n is number of nodes
Space Complexity: O(h) - where h is the height of the tree

*/
