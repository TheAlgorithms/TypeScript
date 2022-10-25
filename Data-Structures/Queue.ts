/**
 * @class Queue 
 * @description class based implementation of a queue, it works based on the FIFO method 
 *    
 * @methods
 *    @function .push - insert an object in the end of the queue
 *    @function .pop - remove an element of the end o the queue 
 *    @function .length - returns the size of the qeuue 
 *    @function .isEmpty - returns if the queue is empty
*/
/* queue data-structure. It's work is based on the LIFO method (last-IN-first-OUT).
 * It means that elements added to the queue are placed on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, it pops from the queue.
 * This is a array-based class implementation of a queue.
 */
export class Queue<T> {
  private queue: T[] = [];
  private limit: number;

  /**
   * constructor of the queue, can set a limit, if not provided there is no limit to the queue.
   * @function constructor
   * @description sets the maximum size possible of the queue, the default value is the biggest size possible
   * @param {number} [limit=Number.MAX_VALUE] the limit of the queue
   */
  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  /**
   * @function push
   * @description - adds a new element in the end of the queue
   * @param {T} value - the new value to add
   */
  push(value: T) {
    if (this.length() + 1 > this.limit) {
      throw new Error('Maximum queue size reached');
    }

    this.queue.push(value);
  }

  /**
   * @function pop
   * @description - remove an element the first element in the queue
   * @throws will throw an error if the queue is empty
   * @return {T} removed element
   */
  pop(): T {
    if (this.length() !== 0) {
      return this.queue.shift() as T;
    }

    throw new Error('Empty queue');
  }

  /**
   * @function length
   * @description - number of elements in the queue
   * @return {number} the number of elements in the queue
   */
  length(): number {
    return this.queue.length;
  }

  /**
   * @function isEmpty
   * @description - check if the queue is empty
   * @return {boolean} returns true if the queue is empty, otherwise false
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * @function front  
   * @description - return the first element in the queue 
   * @return {T | null} return the first element in the queue or null if the queue is empty 
   */
  front(): T | null {
    return this.length() !== 0 ? this.queue[0] : null
  }

  /**
   * @function back 
   * @description - return the last added in the queue 
   * @return {T | null} return the last element or null if the queue is empty
   */
  back(): T | null {
    return this.length() !== 0 ? this.queue[this.length() - 1] : null
  }
}
