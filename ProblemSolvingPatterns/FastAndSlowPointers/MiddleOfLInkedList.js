/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 
Example 1:
Input: head = [1,2,3,4,5]
Output: 3
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: 4
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);
