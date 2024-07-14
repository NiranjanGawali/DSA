// We need to find the path with the maximum sum. As we traverse all paths, we can keep track of the path with the maximum sum.
// This problem is similar to others so please refer earlier findPath or BinaryTreePath example for more details

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSum(root) {
  let maxSum = -Infinity; // Initialize maxSum

  function findAPath(currentNode, paths) {
    if (!currentNode) return;

    paths.push(currentNode.val);

    if (currentNode.left === null && currentNode.right === null) {
      let pathSum = paths.reduce((acc, elt) => acc + elt, 0);
      maxSum = Math.max(maxSum, pathSum);
    } else {
      findAPath(currentNode.left, paths);
      findAPath(currentNode.right, paths);
    }

    paths.pop();
  }

  findAPath(root, []); // Start the recursion
  return maxSum; // Return the maxSum found
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = maxPathSum(root);
console.log('Result : ', result);
