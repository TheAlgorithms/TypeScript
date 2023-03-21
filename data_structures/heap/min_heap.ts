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
export class MinHeap<T> implements Heap<T> {
  private heap: T[];

  constructor(elements: T[] = []) {
    this.heap = [];
    for (let element of elements) {
      this.insert(element);
    }
  }

  public insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  public extract(): T {
    let minElement = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.sinkDown();
    return minElement;
  }

  private sinkDown(): void {
    let index = 0;
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let smallerChildIndex;
    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      smallerChildIndex =
        (this.heap[leftChildIndex] || Infinity) <
        (this.heap[rightChildIndex] || Infinity)
          ? leftChildIndex
          : rightChildIndex;
      if (this.heap[smallerChildIndex] > this.heap[index]) break;
      [this.heap[smallerChildIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[smallerChildIndex],
      ];
      index = smallerChildIndex;
      leftChildIndex = index * 2 + 1;
      rightChildIndex = index * 2 + 2;
    }
  }

  private bubbleUp(): void {
    let index = this.size() - 1;
    let parentIndex;
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }
}
