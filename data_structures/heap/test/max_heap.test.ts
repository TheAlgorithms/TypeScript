import { MaxHeap } from "../heap";

describe("MaxHeap", () => {
  let heap: MaxHeap<number>;
  const elements: number[] = [
    12, 4, 43, 42, 9, 7, 39, 16, 55, 1, 51, 34, 81, 18,
  ];

  beforeEach(() => {
    heap = new MaxHeap();
    for (let element of elements) {
      heap.insert(element);
    }
  });

  it("should initialize a heap from input array", () => {
    expect(heap.isEmpty()).toEqual(false);
    heap.check();
  });

  it("should remove and return the max element in the heap", () => {
    const maxValue = heap.extract();

    expect(maxValue).toEqual(81);
    heap.check();
  });

  it("should insert a new element and bubble Up the element to it correct index in the heap", () => {
    heap.insert(61);
    heap.check();
  });

  const extract_all = (heap: MaxHeap<number>) => {
    [...elements].sort((a, b) => b - a).forEach((element: number) => {
      expect(heap.extract()).toEqual(element);
    });
    heap.check();
    expect(heap.size()).toEqual(0);
  }

  it("should remove and return the max elements in order", () => {
    extract_all(heap);
  });

  it("should insert all, then remove and return the max elements in order", () => {
    heap = new MaxHeap();
    elements.forEach((element: number) => {
      heap.insert(element);
    });
    heap.check();
    expect(heap.size()).toEqual(elements.length);
    extract_all(heap);
  });
});
