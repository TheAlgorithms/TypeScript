import { MaxHeap } from "../max_heap";

describe("MaxHeap", () => {
  let heap: MaxHeap<number>;

  beforeAll(() => {
    const elements: number[] = [
      12, 4, 43, 42, 9, 7, 39, 16, 55, 1, 51, 34, 81, 18,
    ];
    heap = new MaxHeap(elements);
  });

  it("should initialize a heap from input array", () => {
    expect(heap.isEmpty()).toEqual(false);
    expect(heap.check()).toEqual(true);
  });

  it("should remove and return the max element in the heap", () => {
    const maxValue = heap.extract();

    expect(maxValue).toEqual(81);
    expect(heap.check()).toEqual(true);
  });

  it("should insert a new element and bubble Up the element to it correct index in the heap", () => {
    heap.insert(61);
    expect(heap.check()).toEqual(true);
  });
});
