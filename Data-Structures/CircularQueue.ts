/**
 * @class CircularQueue 
 * @description Circular implementation of a queue 
*/
export interface Queue<T> {
  push(value: T): void;
  pop(): T;
  length(): number;
}

export class CircularQueue<T> implements Queue<T> {
  private queue: T[];
  private limit: number;
  private frontIdx: number;
  private rearIdx: number;
  /**
   * constructor of the queue, can set a limit, if not provided there is no limit to the queue.
   * @function constructor
   * @description sets the maximum size possible of the queue, the default value is the biggest size possible
   * @param {number} [limit=Number.MAX_VALUE] the limit of the queue
   */
  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
    this.queue = new Array<T>(limit);
    this.frontIdx = 0;
    this.rearIdx = 0;
  }

  private increaseRear = () => this.rearIdx = (this.rearIdx + 1) % this.limit;
  private increaseFront = () => this.frontIdx = (this.frontIdx + 1) % this.limit;
  /**
   * @function push
   * @description - adds a new element in the end of the queue
   * @param {T} value - the new value to add
   */
  public push(value: T) {
    if (this.length() === this.limit)
      throw ("Maximum queue size reached");
    if (this.queue.length < this.limit) {
      this.queue.push(value);
    }
    else {
      this.queue[this.rearIdx] = value;
    }
    this.increaseRear();
  }

  /**
   * @function pop
   * @description - remove an element the first element in the queue
   * @throws will throw an error if the queue is empty
   * @return {T} removed element
   */
  public pop(): T {
    if (this.length() === 0) {
      throw new Error('Empty queue');
    }
    const frontValue = this.front();
    this.increaseFront();
    return frontValue;
  }

  /**
   * @function length
   * @description - number of elements in the queue
   * @return {number} the number of elements in the queue
   */
  public length(): number {
    return Math.abs(this.rearIdx - this.frontIdx);
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
  public front(): T {
    return this.queue[this.frontIdx];
  }

  /**
   * @function back 
   * @description - return the last added in the queue 
   * @return {T | null} return the last element or null if the queue is empty
   */
  public back(): T | null {
    return this.queue[this.rearIdx - 1];
  }
}
