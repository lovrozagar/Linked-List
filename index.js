class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  append(data) {
    let node = new Node(data);
    let current = this.head;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size += 1;
  }

  pop() {
    let current = this.head;

    // IF ONLY ELEMENT IN LIST REMOVE IT AND RETURN
    if (current.next === null) {
      this.head = null;
      return;
    }

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  printListValues() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.prepend(100);
ll.pop();
ll.printListValues();
