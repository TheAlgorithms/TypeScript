/**
 * A heap is a complete binary tree
 * In a complete binary tree each level is filled before lower levels are added
 * Each level is filled from left to right
 *
 * In a (min|max) heap the value of every node is (less|greater) than that of its children
 *
 * The heap is often implemented using an array structure.
 * In the array implementation, the relationship between a parent index and its two children
 * are ((parentindex * 2) + 1) and ((parentindex * 2) + 2)
 */
export abstract class Heap<T> {
  protected heap: T[]
  // A comparison function. Returns true if a should be the parent of b.
  protected compare: (a: T, b: T) => boolean

  constructor(compare: (a: T, b: T) => boolean) {
    this.heap = []
    this.compare = compare
  }

  /**
   * Compares the value at parentIndex with the value at childIndex
   * In a maxHeap, the value at parentIndex should be larger than the value at childIndex
   * In a minHeap, the value at parentIndex should be smaller than the value at childIndex
   */
  private isRightlyPlaced(childIndex: number, parentIndex: number): boolean {
    return this.compare(this.heap[parentIndex], this.heap[childIndex])
  }

  /**
   * In a maxHeap, the index with the larger value is returned
   * In a minHeap, the index with the smaller value is returned
   */
  private getChildIndexToSwap(
    leftChildIndex: number,
    rightChildIndex: number
  ): number {
    if (rightChildIndex >= this.size()) {
      return leftChildIndex
    }
    return this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])
      ? leftChildIndex
      : rightChildIndex
  }

  public insert(value: T): void {
    this.heap.push(value)
    this.bubbleUp()
  }

  public extract(): T {
    const maxElement = this.heap[0]
    this.heap[0] = this.heap[this.size() - 1]
    this.heap.pop()
    this.sinkDown()
    return maxElement
  }

  public size(): number {
    return this.heap.length
  }

  public isEmpty(): boolean {
    return this.size() === 0
  }

  protected swap(a: number, b: number): void {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  protected bubbleUp(index: number = this.size() - 1): void {
    let parentIndex

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2)
      if (this.isRightlyPlaced(index, parentIndex)) break
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  private sinkDown(): void {
    let index = 0
    let leftChildIndex = this.getLeftChildIndex(index)
    let rightChildIndex = this.getRightChildIndex(index)
    let childIndexToSwap

    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      childIndexToSwap = this.getChildIndexToSwap(
        leftChildIndex,
        rightChildIndex
      )
      if (this.isRightlyPlaced(childIndexToSwap, index)) break
      this.swap(childIndexToSwap, index)
      index = childIndexToSwap
      leftChildIndex = this.getLeftChildIndex(index)
      rightChildIndex = this.getRightChildIndex(index)
    }
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2
  }

  public check(): void {
    this._check()
  }

  private _check(index: number = 0): void {
    if (!this.heap[index]) return
    const leftChildIndex = this.getLeftChildIndex(index)
    const rightChildIndex = this.getRightChildIndex(index)

    if (
      this.heap[leftChildIndex] &&
      !this.isRightlyPlaced(leftChildIndex, index)
    ) {
      throw new Error('Heap does not adhere to heap invariant')
    }

    if (
      this.heap[rightChildIndex] &&
      !this.isRightlyPlaced(rightChildIndex, index)
    ) {
      throw new Error('Heap does not adhere to heap invariant')
    }

    this._check(leftChildIndex)
    this._check(rightChildIndex)
  }
}

export class MinHeap<T> extends Heap<T> {
  constructor(compare: (a: T, b: T) => boolean = (a: T, b: T) => a < b) {
    super(compare)
  }
}

export class MaxHeap<T> extends Heap<T> {
  constructor(compare: (a: T, b: T) => boolean = (a: T, b: T) => a > b) {
    super(compare)
  }
}

export class PriorityQueue<T> extends MinHeap<T> {
  // Maps from the n'th node to its index within the heap.
  private keys: number[]
  // Maps from element to its index with keys.
  private keys_index: (a: T) => number

  constructor(
    keys_index: (a: T) => number,
    num_keys: number,
    compare: (a: T, b: T) => boolean = (a: T, b: T) => a < b
  ) {
    super(compare)
    this.keys = Array(num_keys).fill(-1)
    this.keys_index = keys_index
  }

  protected swap(a: number, b: number): void {
    const akey = this.keys_index(this.heap[a])
    const bkey = this.keys_index(this.heap[b])
    ;[this.keys[akey], this.keys[bkey]] = [this.keys[bkey], this.keys[akey]]
    super.swap(a, b)
  }

  public insert(value: T): void {
    this.keys[this.keys_index(value)] = this.size()
    super.insert(value)
  }

  public extract(): T {
    // Unmark the highest priority element and set key to zero for the last element in the heap.
    this.keys[this.keys_index(this.heap[0])] = -1
    if (this.size() > 1) {
      this.keys[this.keys_index(this.heap[this.size() - 1])] = 0
    }
    return super.extract()
  }

  public increasePriority(idx: number, value: T): void {
    if (this.keys[idx] === -1) {
      // If the key does not exist, insert the value.
      this.insert(value)
      return
    }
    const key = this.keys[idx]
    if (this.compare(this.heap[key], value)) {
      // Do not do anything if the value in the heap already has a higher priority.
      return
    }
    // Increase the priority and bubble it up the heap.
    this.heap[key] = value
    this.bubbleUp(key)
  }
}
