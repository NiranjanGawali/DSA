/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
 
Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104

https://leetcode.com/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150

*/

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.value !== q.value) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// let p = [1, 2, 3],
//   q = [1, 2, 3];

let pTree = new TreeNode(1);
pTree.left = new TreeNode(2);
pTree.right = new TreeNode(3);

let qTree = new TreeNode(1);
qTree.left = new TreeNode(2);
qTree.right = new TreeNode(3);

let result = isSameTree(pTree, qTree);
console.log('Result : ', result);

/*

Time Complexity: O(n), where n is the number of nodes in the tree. In the worst case, the function visits every node exactly once.

Space Complexity: O(h), where h is the height of the tree
*/
