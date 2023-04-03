import { Heap } from "./heap";

/**
 * A heap is a complete binary tree
 * In a complete binary tree each level is filled before lower levels are added
 * Each level is filled from left to right
 *
 * In a min heap the value of every node is smaller than that if its children
 *
 * The heap if often implemented using an array structure.
 * In the array implementation, the relationship between a parent index and its two children
 * are ((parentindex * 2) + 1) and ((parentindex * 2) + 2)
 *
 */
export class MinHeap<T> extends Heap<T> {
  constructor(elements: T[] = []) {
    super(elements);
  }

  /**
   * Checks if the value at the parent index is lesser than or equal to
   * the value at the child index
   */
  protected isRightlyPlaced(childIndex: number, parentIndex: number): boolean {
    return this.heap[parentIndex] <= this.heap[childIndex];
  }

  /**
   * Returns the child index that stores a smaller value
   */
  protected getChildIndexToSwap(
    leftChildIndex: number,
    rightChildIndex: number
  ): number {
    return (this.heap[leftChildIndex] || -Infinity) <
      (this.heap[rightChildIndex] || -Infinity)
      ? leftChildIndex
      : rightChildIndex;
  }
}
