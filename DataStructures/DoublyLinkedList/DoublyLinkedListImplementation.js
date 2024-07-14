class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
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
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let lastNode = this.tail;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      lastNode.prev = null;
    }
    this.length--;
    return lastNode;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    let currentHead = this.head;

    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let j = this.length - 1; j > index; j--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index === 0) {
      return this.unshift(value);
    }

    let before = this.get(index - 1);
    let after = before.next;
    const newNode = new Node(value);
    before.next = newNode;
    newNode.next = after;
    newNode.prev = before;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    // let before = this.get(index - 1);
    // let after = before.next;
    // before.next = after.next;
    // after.next.prev = before;
    // after.next = null;
    // after.prev = null;
    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

let myDLL = new DoublyLinkedList(1);
myDLL.push(2);
myDLL.push(3);
myDLL.push(4);
myDLL.push(5);

// myDLL.pop();
// myDLL.unshift(10);
// myDLL.shift();
// let a = myDLL.get(3);
// console.log('GET VALUE => ', a.value);

// myDLL.insert(1, 10);
myDLL.remove(2);

myDLL.getHead();
myDLL.getTail();
myDLL.getLength();

console.log('\nDoubly Linked List:');
myDLL.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Doubly Linked List:
    1
    2

*/
