// Find the height of the binary tree

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findHeightOfBinaryTree(node) {
  if (node === null) {
    return 0;
  }

  let leftSide = findHeightOfBinaryTree(node.left);
  let rightSide = findHeightOfBinaryTree(node.right);

  return Math.max(rightSide, leftSide) + 1;
}

let treeNode = new TreeNode(7);
treeNode.left = new TreeNode(5);
treeNode.left.left = new TreeNode(3);
treeNode.left.right = new TreeNode(6);
treeNode.right = new TreeNode(9);

/*
       7
      / \
     5   9
    / \
   3   6
*/

let result = findHeightOfBinaryTree(treeNode);
console.log('Result : ', result);
