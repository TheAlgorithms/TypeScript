import { CircularQueue } from '../circular_queue'

describe('Circular Queue', () => {
  let queue: CircularQueue<number>

  beforeEach(() => {
    queue = new CircularQueue(5)
  })

  it('should enqueue an element', () => {
    queue.enqueue(1)

    expect(queue.peek()).toBe(1)
  })

  it('should throw an error on enqueue when queue is full', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)

    expect(() => queue.enqueue(6)).toThrowError('Queue is full')
  })

  it('should dequeue an element', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).toBe(1)
  })

  it('should throw an error on dequeue when queue is empty', () => {
    expect(() => queue.dequeue()).toThrowError('Queue is empty')
  })

  it('should peek an element', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).toBe(1)
  })

  it('should return null on peek when queue is empty', () => {
    expect(queue.peek()).toBeNull()
  })

  it('should return true on isEmpty when queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('should return false on isEmpty when queue is not empty', () => {
    queue.enqueue(1)

    expect(queue.isEmpty()).toBeFalsy()
  })

  it('should return the correct length', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.length()).toBe(3)
  })
})
