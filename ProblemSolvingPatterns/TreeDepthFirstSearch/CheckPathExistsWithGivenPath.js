/**
 Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

        1
       / \
      0   1
     /   / \
    1   6   5


1. [1, 0, 7] (Expected output: false)
2. [1, 1, 6] (Expected output: true)
 */

/*

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findPath(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }

  return findPathRecursive(root, sequence, 0);
}

function findPathRecursive(currentNode, sequence, sequenceIndex) {
  if (currentNode === null) {
    return false;
  }

  if (
    sequenceIndex >= sequence.length ||
    currentNode.val != sequence[sequenceIndex]
  ) {
    return false;
  }

  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceIndex === sequence.length - 1
  ) {
    return true;
  }

  return (
    findPathRecursive(currentNode.left, sequence, sequenceIndex + 1) ||
    findPathRecursive(currentNode.right, sequence, sequenceIndex + 1)
  );
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${findPath(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${findPath(root, [1, 1, 6])}`);
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findPath(root, sequence) {
  let result = false;
  findPathRecursive(root, sequence, 0, []);
  return result;

  function findPathRecursive(currentNode, sequence, sequenceIndex, path) {
    if (!currentNode) return;

    path.push(currentNode.val);

    if (
      sequenceIndex < sequence.length &&
      currentNode.val === sequence[sequenceIndex]
    ) {
      // Check if it's a leaf node and the sequence is complete
      if (
        currentNode.left === null &&
        currentNode.right === null &&
        sequenceIndex === sequence.length - 1
      ) {
        result = true;
      } else {
        // Continue to search in the left and right sub-trees
        findPathRecursive(currentNode.left, sequence, sequenceIndex + 1, path);
        findPathRecursive(currentNode.right, sequence, sequenceIndex + 1, path);
      }
    }

    // Backtrack the path
    path.pop();
  }
}

// Create the tree
const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

// Test the sequences
console.log(`Tree has path sequence [1, 0, 7]: ${findPath(root, [1, 0, 7])}`); // Expected output: false
console.log(`Tree has path sequence [1, 1, 6]: ${findPath(root, [1, 1, 6])}`); // Expected output: true
