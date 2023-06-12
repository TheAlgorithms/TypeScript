import { MinHeap } from "../min_heap";

describe("MinHeap", () => {
  let heap: MinHeap<number>;
  const elements: number[] = [
    12, 4, 43, 42, 9, 7, 39, 16, 55, 1, 51, 34, 81, 18,
  ];

  beforeEach(() => {
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

  const extract_all = (heap: MinHeap<number>) => {
    [...elements].sort((a, b) => a - b).forEach((element: number) => {
      expect(heap.extract()).toEqual(element);
    });
    heap.check();
    expect(heap.size()).toEqual(0);
  }

  it("should remove and return the min elements in order", () => {
    extract_all(heap);
  });

  it("should insert all, then remove and return the min elements in order", () => {
    heap = new MinHeap();
    elements.forEach((element: number) => {
      heap.insert(element);
    });
    heap.check();
    expect(heap.size()).toEqual(elements.length);
    extract_all(heap);
  });
});
