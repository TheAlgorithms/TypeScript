import { Queue } from './queue'

type Node<T> = {
  value: T
  next?: Node<T>
}

/**
 * This is a LinkedList-like implementation of a Queue,
 * allowing the operations to be implemented in constant time.
 * A Queue is a data structure that follows the FIFO (First-In First-Out) principle:
 * The first element that was added to the queue will be the first one to be removed.
 */
export class LinkedQueue<T> implements Queue<T> {
  public size: number
  public head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.size = 0
  }

  /**
   * Adds an item to the queue.
   *
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    const node = { value: item } as Node<T> // Creates a new node
    this.size++ // Increase the length of the Queue

    if (!this.tail) {
      this.tail = this.head = node
      return
    }
    this.tail.next = node // Updates  the next tail to the node created
    this.tail = node // The tail of the Queue then becomes the node created!!
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws Queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue.
   */
  dequeue(): T | undefined {
    if (!this.head) {
      throw new Error('Queue Underflow')
    }

    this.size--
    const head = this.head // We store the head in order not to lose track of it
    this.head = this.head.next // Update the the head to the next node
    return head.value // Return the value of the head
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | undefined | null {
    if (this.isEmpty()) {
      return null
    }
    return this.head?.value
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns {number} The number of items in the queue.
   */
  length(): number {
    return this.size
  }
}
