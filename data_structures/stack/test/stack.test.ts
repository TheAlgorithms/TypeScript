import { Stack } from '../stack'

describe('Testing Stack data structure', () => {
  it('push should add a new element to the stack', () => {
    const stack = new Stack<number>()
    stack.push(2)

    expect(stack.length()).toBe(1)
  })

  it('push should throw error on reach limit', () => {
    const stack = new Stack<number>(2)
    stack.push(2)
    stack.push(3)

    expect(() => stack.push(4)).toThrow('Stack Overflow')
  })

  it('isEmpty should return true on empty stack', () => {
    const stack = new Stack<number>()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('isEmpty should return false on not empty stack', () => {
    const stack = new Stack<number>()
    stack.push(2)

    expect(stack.isEmpty()).toBeFalsy()
  })

  it('top should return the last value', () => {
    const stack = new Stack<number>()
    stack.push(2)

    expect(stack.top()).toBe(2)
  })

  it('top should return null when the stack is empty', () => {
    const stack = new Stack<number>()

    expect(stack.top()).toBe(null)
  })

  it('length should return the number of elements in the stack', () => {
    const stack = new Stack<number>()
    stack.push(2)
    stack.push(2)
    stack.push(2)

    expect(stack.length()).toBe(3)
  })

  it('pop should remove the last element and return it', () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toBe(3)
    expect(stack.length()).toBe(2)
  })

  it('pop should throw an exception if the stack is empty', () => {
    const stack = new Stack<number>()

    expect(() => stack.pop()).toThrow('Stack Underflow')
  })
})
