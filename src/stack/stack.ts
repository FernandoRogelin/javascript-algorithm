export default class Stack {
  count: number
  items: any

  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element: number) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }
}
