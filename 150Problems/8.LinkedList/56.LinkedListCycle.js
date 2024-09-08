/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?


https://leetcode.com/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value = null) {
    if (value !== null) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  // Print the list elements
  printList() {
    let isVisited = new Set();
    let temp = this.head;
    let result = '';
    while (temp != null && !isVisited.has(temp)) {
      result += temp.value + ' ';
      isVisited.add(temp);
      temp = temp.next;
    }
    return result.trim(); // Return the values as a string
  }

  // Inesrting the element
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Removing the last element from the LL, which is marked by tail
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // Inserting the element at the start of linked list
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Removing the element from start of the LL
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  // create loop
  createLoop(pos) {
    if (pos < 0 || pos >= this.length) return null;

    let currentNode = this.head;
    let index = 0;
    let loopNode = null;
    while (currentNode) {
      if (index === pos) {
        loopNode = currentNode;
      }
      currentNode = currentNode.next;
      index++;
    }

    if (loopNode) {
      this.tail.next = loopNode;
    }
  }

  // is loop exists for the linked list
  hasLoop() {
    let fast = this.head;
    let slow = this.head;

    // Continue looping while `fast` and `fast.next` are not null,
    // ensuring `fast` can safely advance by two steps.
    // If `fast` and `slow` meet, a cycle is detected.
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (slow === fast) return true; // Cycle detected
    }
    return false;
  }
}

function main(head, pos) {
  let node = new LinkedList();
  for (const headNode of head) {
    node.push(headNode);
  }

  node.createLoop(pos);
  return node.hasLoop();
}

let head = [3, 2, 0, -4],
  pos = 1;

// let head = [1, 2],
//   pos = 0;

// let head = [1],
//   pos = -1;

let result = main(head, pos);
console.log('Is it contains loop : ', result);

/**
 * Time and Space Complexity:
 *
 * printList():
 * - Time: O(n)  // Traverses the list once
 * - Space: O(n) // Uses a Set to store visited nodes
 *
 * push(value):
 * - Time: O(1)  // Appends a node at the end
 * - Space: O(1) // No extra space beyond the new node
 *
 * pop():
 * - Time: O(n)  // Traverses the list to find the second-to-last node
 * - Space: O(1) // No extra space beyond a few pointers
 *
 * unshift(value):
 * - Time: O(1)  // Inserts a node at the beginning
 * - Space: O(1) // No extra space beyond the new node
 *
 * shift():
 * - Time: O(1)  // Removes the node at the beginning
 * - Space: O(1) // No extra space beyond a few pointers
 *
 * createLoop(pos):
 * - Time: O(n)  // Finds the node at position `pos` (traverses the list)
 * - Space: O(1) // No extra space beyond a few pointers
 *
 * hasLoop():
 * - Time: O(n)  // Floyd's Cycle-Finding algorithm (Tortoise and Hare)
 * - Space: O(1) // Uses a constant amount of extra space
 *
 * Overall complexity for main(head, pos):
 * - Time: O(n)  // Depends on push(), createLoop(), and hasLoop()
 * - Space: O(n) // Primarily space for list nodes
 */
