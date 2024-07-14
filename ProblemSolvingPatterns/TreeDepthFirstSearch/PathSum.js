/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up 
all the values along the path equals targetSum.
A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Example 3:
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPath(root, sum) {
  if (!root) return false;

  if (root.left === null && root.right === null) {
    return root.val === sum;
  }

  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);

//The time complexity of the above algorithm is O(N), where N is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

//The space complexity of the above algorithm will be O(N) in the worst case. This space will be used to store the recursion stack.
//The worst case will happen when the given tree is a linked list (i.e., every node has only one child).
