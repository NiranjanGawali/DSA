/*
If we know the length of the LinkedList cycle, we can find the start of the cycle through the following steps:

Take two pointers. Let’s call them pointer1 and pointer2.
Initialize both pointers to point to the start of the LinkedList.
We can find the length of the LinkedList cycle using the approach discussed in LinkedList Cycle. Let’s assume that the length of the cycle is K nodes.
Move pointer2 ahead by K nodes.
Now, keep incrementing pointer1 and pointer2 until they both meet.
As pointer2 is K nodes ahead of pointer1, which means, pointer2 must have completed one loop in the cycle when both pointers meet. 
Their meeting point will be the start of the cycle.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findCycleStart(head) {
  let cycleLength = 0;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      //found the cycle
      cycleLength = calculateCycleLength(slow);
      break;
    }
  }

  return findStart(head, cycleLength);
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

function findStart(head, cycleLength) {
  let pointer1 = head;
  let pointer2 = head;
  //move pointer2 ahead by cycleLength nodes
  while (cycleLength > 0) {
    pointer2 = pointer2.next;
    cycleLength--;
  }

  //increment both pointers until they meet at the start
  //of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);
