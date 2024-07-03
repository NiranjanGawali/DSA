/*
Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with another pointer until we see the slow 
pointer again to find the length of the cycle.

Here logic is similar as LinkedListCycle, but some modification will be there.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findCycleLength(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return calculateCycleLength(slow);
    }
  }
  return 0;
}

function calculateCycleLength(slow) {
  let current = slow;
  let cycleLength = 0;
  while (true) {
    current = current.next;
    cycleLength++;
    if (current === slow) {
      break;
    }
  }
  return cycleLength;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle length of: ${findCycleLength(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle length of: ${findCycleLength(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle length of: ${findCycleLength(head)}`);

// The above algorithm runs in O(N) time complexity and O(1) space complexity.
