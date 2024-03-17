import { LinkedListStack } from '../linked_list_stack'

describe('Linked List Stack', () => {
  const stack: LinkedListStack<number> = new LinkedListStack<number>(4)

  stack.push(1)
  stack.push(2)
  stack.push(3)

  it('should get the top element from the stack', () => {
    expect(stack.top()).toBe(3)
  })

  it('should remove the top element from the stack and give the new top element', () => {
    expect(stack.pop()).toBe(3)
    expect(stack.top()).toBe(2)
  })

  it('should add a new element on top', () => {
    expect(stack.push(4))
  })

  it('should fail to add the second element on top, because of a stack overflow', () => {
    stack.push(4)
    expect(() => stack.push(5)).toThrowError('Stack overflow')
  })

  it('should fail to pop the top element on an empty stack', () => {
    const s: LinkedListStack<number> = new LinkedListStack<number>()
    expect(() => s.pop()).toThrowError('Stack underflow')
  })
})
