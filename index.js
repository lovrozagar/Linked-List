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

  contains(value) {
    let current = this.head;
    let isMatch = false;

    while (current) {
      if (current.data === value) {
        isMatch = true;
      }
      current = current.next;
    }

    return isMatch;
  }

  find(value) {
    let current = this.head;
    let index = -1;

    while (current) {
      index += 1;
      if (current.data === value) {
        return index;
      }
      current = current.next;
    }

    return null;
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

  getNodeAtIndex(index) {
    let current = this.head;
    let counter = 0;

    while (current) {
      if (counter === index) {
        return current;
      }
      counter += 1;
      current = current.next;
    }

    return `Node of index ${index} does not exist`;
  }

  printListValues() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getListAsString() {
    let current = this.head;
    let string = '';

    while (current) {
      if (current === this.head) {
        string = string.concat(`(${current.data})`);
      } else {
        string = string.concat(` -> (${current.data})`);
      }
      current = current.next;
    }

    string === '' ? (string = 'null') : (string = string.concat(' -> null'));
    return string;
  }
}

const ll = new LinkedList();
ll.append(100);
ll.append(200);
ll.append(300);
ll.append(500);
ll.append(400);
ll.append(700);
ll.printListValues();
console.log(ll.getNodeAtIndex(0));
