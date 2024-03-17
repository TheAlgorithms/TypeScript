import { Queue } from '../queue'

type QueueConstructor = new <T>() => Queue<T>
export function testQueue(Queue: QueueConstructor) {
  it('enqueue should add a new element to the queue', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    expect(queue.length()).toBe(1)
  })

  it('isEmpty should return true on empty queue', () => {
    const queue = new Queue<number>()
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('isEmpty should return false on not empty queue', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    expect(queue.isEmpty()).toBeFalsy()
  })

  it('front should return the first value', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    expect(queue.peek()).toBe(1)
  })

  it('front should return null when the queue is empty', () => {
    const queue = new Queue<number>()
    expect(queue.peek()).toBe(null)
  })

  it('length should return the number of elements in the queue', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(1)
    queue.enqueue(1)
    expect(queue.length()).toBe(3)
  })

  it('dequeue should remove the first element', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeue()
    expect(queue.length()).toBe(2)
  })

  it('dequeue should throw error on empty queue', () => {
    const queue = new Queue<number>()
    expect(() => queue.dequeue()).toThrow('Queue Underflow')
  })
}
