import { MinHeap } from "../min_heap";

describe("MinHeap", () => {
  let heap: MinHeap<number>;

  beforeAll(() => {
    const elements: number[] = [
      12, 4, 43, 42, 9, 7, 39, 16, 55, 1, 51, 34, 81, 18,
    ];
    heap = new MinHeap(elements);
  });

  it("should initialize a heap from input array", () => {
    expect(heap.isEmpty()).toEqual(false);
    heap.check();
  });

  it("should remove and return the min element in the heap", () => {
    const minValue = heap.extract();

    expect(minValue).toEqual(1);
    heap.check();
  });

  it("should insert a new element and bubble Up the element to it correct index in the heap", () => {
    heap.insert(24);
    heap.check();
  });
});
