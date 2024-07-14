class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Add the element at the last in LL
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If there is no previous elements are present
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Removes the last element from LL
  pop() {
    if (!this.head) return undefined;
    let temp, pre;
    temp = this.head;
    pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // Add element at the first position in the LL
  unshift(value) {
    const newNode = new Node(value);
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

  // Removes first element of LL
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

  // Get the element by index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // set the element by index
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  // insert element at perticular location
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  // remove element by index
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  // reverse the linked list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.head === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.push(8);

// myLinkedList.pop();
// myLinkedList.unshift(45);
// myLinkedList.shift();
// myLinkedList.get(1);
// myLinkedList.set(2, 10);
// myLinkedList.insert(2, 16);
// myLinkedList.remove(2);
myLinkedList.reverse();

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log('\nLinked List:');
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
