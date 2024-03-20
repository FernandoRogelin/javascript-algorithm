import Stack from './stack/stack-array'

function decimalToBinary (decNumber: number) {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
console.log(decimalToBinary(1000))

// const stack = new Stack()

// console.log(Object.getOwnPropertyNames(stack))
// console.log(Object.keys(stack))
// console.log(stack._items)

// console.log(stack.isEmpty())
// stack.push(5)
// stack.push(8)

// console.log(stack.peek())

// stack.push(11)

// stack.push(15)
// console.log(stack.size())

// stack.pop()
// stack.pop()

// console.log(stack.size())
