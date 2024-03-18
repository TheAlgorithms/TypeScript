/**
 * This is an array-based implementation of a Queue.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It means that the first element that was added to the queue will be the first one to be removed.
 * The time complexity of the operations is O(n).
 */
import { Queue } from './queue'
export class ArrayQueue<T> implements Queue<T> {
  private queue: T[] = []

  /**
   * Returns the number of items in the queue.
   *
   * @returns {number} The number of items in the queue.
   */
  length(): number {
    return this.queue.length
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.queue.length === 0
  }

  /**
   * Adds an item to the queue.
   *
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    this.queue.push(item)
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws Queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue.
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow')
    }

    return this.queue.shift() as T
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null
    }

    return this.queue[0]
  }
}
