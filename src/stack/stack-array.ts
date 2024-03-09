export default class Stack {
  items: number[]

  constructor() {
    this.items = []
  }

  push(element: number) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  size() {
    return this.items.length
  }

  peek() {
    return this.items[this.size() - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = []
  }
}
