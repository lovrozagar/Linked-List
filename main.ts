import './scss/style.scss'

class Node {
  data: unknown
  next: Node | null

  constructor(data: unknown) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  head: Node | null
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  prepend(data: unknown) {
    const node = new Node(data)
    node.next = this.head
    this.head = node

    this.size += 1
  }

  append(data: unknown): void {
    const node = new Node(data)

    if (this.head === null) {
      this.head = node
    } else {
      let current: Node = this.head

      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.size += 1
  }

  pop(): void {
    if (this.head === null) return
    if (this.head.next === null) {
      this.head = null
      return
    }

    let current: Node | null = this.head
    while (current.next?.next) {
      current = current.next
    }
    current.next = null
  }

  shift(): void {
    if (this.head === null) return
    if (this.head.next === null) {
      this.head = null
      return
    }

    this.head = this.head.next
    this.size -= 1
  }

  getHead(): Node | null {
    return this.head
  }

  getTail(): Node | null {
    if (this.head === null) return null
    if (this.head.next === null) return this.head

    let current = this.head
    while (current.next) {
      current = current.next
    }

    return current
  }

  contains(data: unknown): boolean {
    if (this.head === null) return false

    let current: Node | null = this.head
    while (current) {
      if (current.data === data) return true
      current = current.next
    }

    return false
  }

  find(data: unknown): unknown {
    if (this.head === null) return null

    let index: number = 1
    let current: Node | null = this.head
    while (current) {
      if (current.data === data) return index
      current = current.next
      index += 1
    }

    return null
  }

  toString() {
    if (this.head === null) return 'null'

    let string = ''
    let current: Node | null = this.head
    while (current) {
      string += `(${current.data}) -> `
      current = current.next
    }

    string += 'null'
    return string
  }

  insertAt(value: unknown, index: number): void {
    const node: Node = new Node(value)

    if (index === 0 && this.head === null) {
      this.head = node
    }

    if (index === 0 && this.head !== null) {
      let temp = this.head
      this.head = node
      node.next = temp
    }

    let nodeIndex: number = 1
    let current: Node | null = this.head
    while (current) {
      if (nodeIndex === index) {
        let temp = current.next
        current.next = node
        node.next = temp
        return
      }
      current = current.next
      nodeIndex += 1
    }
  }

  removeAt(index: number): void {
    if (index === 0 && this.head === null) {
      return
    }

    if (index === 0 && this.head !== null) {
      this.head = this.head.next
    }

    let nodeIndex: number = 1
    let current: Node | null = this.head
    while (current) {
      if (nodeIndex === index && current.next !== null) {
        current.next = current.next.next
      }
      current = current.next
      nodeIndex += 1
    }
  }
}

const list = new LinkedList()
list.append(100)
list.prepend(50)
list.append(75)
list.pop()
console.log(list.toString())
