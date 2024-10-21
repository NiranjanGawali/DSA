/*

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

https://leetcode.com/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

*/

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function invertBinaryTree(root) {
  // Base case: if the node is null, return null
  if (root === null) {
    return null;
  }

  // Recursively invert the left and right subtrees
  let left = invertBinaryTree(root.left);
  let right = invertBinaryTree(root.right);

  // Swap the left and right children of the current node
  root.left = right;
  root.right = left;

  return root;
}

let pTree = new TreeNode(1);
pTree.left = new TreeNode(2);
pTree.right = new TreeNode(3);

let result = invertBinaryTree(pTree);

console.log('Result : ', result);

/*
Time Complexity: O(n), where n is the number of nodes in the tree. In the worst case, the function visits every node exactly once.

Space Complexity: O(h), where h is the height of the tree.
*/
