export default class Stack {
  private _count: number
  private _items: any

  constructor() {
    this._count = 0
    this._items = {}
  }

  push(element: number) {
    this._items[this._count] = element
    this._count++
  }

  size() {
    return this._count
  }

  isEmpty() {
    return this._count === 0
  }
}
