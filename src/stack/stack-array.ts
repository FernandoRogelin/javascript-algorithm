const items = new WeakMap()

export default class Stack {
  constructor() {
    items.set(this, [])
  }

  push(element: number) {
    const s = items.get(this)
    s.push(element)
  }

  pop() {
    const s = items.get(this)
    return s.pop()
  }

  size() {
    const s = items.get(this)
    return s.length
  }

  peek() {
    const s = items.get(this)
    return s[this.size() - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    items.set(this, [])
  }
}
