/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
 
Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 
*/

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isMirror(left, right) {
  // If both subtrees are empty, they are mirrors of each other
  if (left === null && right === null) return true;

  // If one of the subtrees is empty and the other is not, they are not mirrors
  if (left === null || right === null) return false;

  // The current nodes must have the same value, and their subtrees must be mirrors
  return (
    left.value === right.value &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
}

function isInvertedBinaryTree(root) {
  if (root === null) {
    return null;
  }

  return isMirror(root.left, root.right);
}

let treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(2);
treeNode.left.left = new TreeNode(3);
treeNode.left.right = new TreeNode(4);
treeNode.right.left = new TreeNode(4);
treeNode.right.right = new TreeNode(3);

// let treeNode = new TreeNode(1);
// treeNode.left = new TreeNode(2);
// treeNode.right = new TreeNode(2);
// treeNode.left.right = new TreeNode(3); // Left node's right child
// treeNode.right.right = new TreeNode(3); // Right node's right child

let result = isInvertedBinaryTree(treeNode);
console.log('Result : ', result);

/*
Time Complexity: O(n), where n is the number of nodes in the tree.
Space Complexity: O(h), where h is the height of the tree.
*/
