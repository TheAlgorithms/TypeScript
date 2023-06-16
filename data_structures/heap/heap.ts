/**
 * A heap is a complete binary tree
 * In a complete binary tree each level is filled before lower levels are added
 * Each level is filled from left to right
 *
 * In a (min|max) heap the value of every node is (less|greater) than that if its children
 *
 * The heap if often implemented using an array structure.
 * In the array implementation, the relationship between a parent index and its two children
 * are ((parentindex * 2) + 1) and ((parentindex * 2) + 2)
 *
 */

export abstract class Heap<T> {
  private heap: T[];
  // A comparison function. Returns true if a should be the parent of b.
  private compare: (a: any, b: any) => boolean;

  constructor(elements: T[] = [], compare: (a: T, b: T) => boolean) {
    this.heap = [];
    this.compare = compare;
    for (let element of elements) {
      this.insert(element);
    }
  }

  /**
   * Compares the value at parentIndex with the value at childIndex
   * In a maxHeap the value at parentIndex should be larger than the value at childIndex
   * In a minHeap the value at parentIndex should be smaller than the value at childIndex
   *
   */
  private isRightlyPlaced( childIndex: number, parentIndex: number) {
    return this.compare(this.heap[parentIndex], this.heap[childIndex]);
  }

  /**
   * In a maxHeap the index with the larger value is returned
   * In a minHeap the index with the smaller value is returned
   */
  private getChildIndexToSwap(leftChildIndex: number, rightChildIndex: number): number {
    if (rightChildIndex >= this.size()) {
      return leftChildIndex;
    }
    return this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])
      ? leftChildIndex
      : rightChildIndex;
  }

  public insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  public extract(): T {
    let maxElement = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.sinkDown();
    return maxElement;
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  private bubbleUp(): void {
    let index = this.size() - 1;
    let parentIndex;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.isRightlyPlaced(index, parentIndex)) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  private sinkDown(): void {
    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);
    let childIndexToSwap;

    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      childIndexToSwap = this.getChildIndexToSwap(
        leftChildIndex,
        rightChildIndex
      );
      if (this.isRightlyPlaced(childIndexToSwap, index)) break;
      [this.heap[childIndexToSwap], this.heap[index]] = [
        this.heap[index],
        this.heap[childIndexToSwap],
      ];
      index = childIndexToSwap;
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
    }
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  public check(): void {
    return this._check();
  }

  private _check(index: number = 0): void {
    if (!this.heap[index]) return;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      this.heap[leftChildIndex] &&
      !this.isRightlyPlaced(leftChildIndex, index)
    )
      throw new Error("Heap does not adhere to heap invariant");

    if (
      this.heap[rightChildIndex] &&
      !this.isRightlyPlaced(rightChildIndex, index)
    )
      throw new Error("Heap does not adhere to heap invariant");

    this._check(leftChildIndex);
    this._check(rightChildIndex);
  }
}

export class MinHeap<T> extends Heap<T> {
  constructor(elements: T[] = [], compare = (a: T, b: T) => { return a < b }) {
    super(elements, compare);
  }
}

export class MaxHeap<T> extends Heap<T> {
  constructor(elements: T[] = [], compare = (a: T, b: T) => { return a > b }) {
    super(elements, compare);
  }
}
