/*

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

*/

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findDepthOfBTree(treeNode) {
  if (treeNode === null) {
    return 0; // Base condition return 0, when reaches to the end of tree
  }

  let leftDepth = findDepthOfBTree(treeNode.left); // finding the depth of left tree
  let rightDepth = findDepthOfBTree(treeNode.right); // fiding the depth of right tree

  return Math.max(leftDepth, rightDepth) + 1; // Taking maximum of both depths and adding 1 for root node
}

let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.left.left = null;
tree.left.right = null;
tree.left.left = new TreeNode(15);
tree.left.right = new TreeNode(7);

let result = findDepthOfBTree(tree);
console.log('Result : ', result);

/*

Time Complexity: O(n), where n is the number of nodes in the tree. In the worst case, the function visits every node exactly once.

Space Complexity: O(h), where h is the height of the tree. This represents the space used by the recursion stack. In the worst case, the height could be n (if the tree is skewed), 
but in the best case (for a balanced tree), the height is log(n).

*/
