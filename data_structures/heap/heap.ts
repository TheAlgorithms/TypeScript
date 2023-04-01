export abstract class Heap<T> {
  protected heap: T[];

  constructor(elements: T[] = []) {
    this.heap = [];
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
  protected abstract isRightlyPlaced(
    childIndex: number,
    parentIndex: number
  ): boolean;

  /**
   * In a maxHeap the the index with the larger value in returned
   * In a maxHeap the the index with the larger value in returned
   */
  protected abstract getChildIndexToSwap(
    leftChildIndex: number,
    rightChildIndex: number
  ): number;

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

  protected bubbleUp(): void {
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

  protected sinkDown(): void {
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

  protected getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  protected getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  public check(): void {
    return this._check();
  }

  protected _check(index: number = 0): void {
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
