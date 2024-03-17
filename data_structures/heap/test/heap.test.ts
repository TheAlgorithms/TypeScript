import { MaxHeap, MinHeap, PriorityQueue } from '../heap'

describe('MaxHeap', () => {
  let heap: MaxHeap<number>
  const elements: number[] = [
    12, 4, 43, 42, 9, 7, 39, 16, 55, 1, 51, 34, 81, 18
  ]

  beforeEach(() => {
    heap = new MaxHeap()
    for (const element of elements) {
      heap.insert(element)
    }
  })

  it('should initialize a heap from input array', () => {
    expect(heap.isEmpty()).toEqual(false)
    heap.check()
  })

  it('should remove and return the max element in the heap', () => {
    const maxValue = heap.extract()

    expect(maxValue).toEqual(81)
    heap.check()
  })

  it('should insert a new element and bubble Up the element to it correct index in the heap', () => {
    heap.insert(61)
    heap.check()
  })

  const extract_all = (heap: MaxHeap<number>) => {
    ;[...elements]
      .sort((a, b) => b - a)
      .forEach((element: number) => {
        expect(heap.extract()).toEqual(element)
      })
    heap.check()
    expect(heap.size()).toEqual(0)
  }

  it('should remove and return the max elements in order', () => {
    extract_all(heap)
  })

  it('should insert all, then remove and return the max elements in order', () => {
    heap = new MaxHeap()
    elements.forEach((element: number) => {
      heap.insert(element)
    })
    heap.check()
    expect(heap.size()).toEqual(elements.length)
    extract_all(heap)
  })
})

describe('MinHeap', () => {
  let heap: MinHeap<number>
  const elements: number[] = [
    12, 4, 43, 42, 9, 7, 39, 16, 55, 1, 51, 34, 81, 18
  ]

  beforeEach(() => {
    heap = new MinHeap()
    for (const element of elements) {
      heap.insert(element)
    }
  })

  it('should initialize a heap from input array', () => {
    expect(heap.isEmpty()).toEqual(false)
    heap.check()
  })

  it('should remove and return the min element in the heap', () => {
    const minValue = heap.extract()

    expect(minValue).toEqual(1)
    heap.check()
  })

  it('should insert a new element and bubble Up the element to it correct index in the heap', () => {
    heap.insert(24)
    heap.check()
  })

  const extract_all = (heap: MinHeap<number>, elements: number[]) => {
    ;[...elements]
      .sort((a, b) => a - b)
      .forEach((element: number) => {
        expect(heap.extract()).toEqual(element)
      })
    heap.check()
    expect(heap.size()).toEqual(0)
  }

  it('should remove and return the min elements in order', () => {
    extract_all(heap, elements)
  })

  it('should insert all, then remove and return the min elements in order', () => {
    heap = new MinHeap()
    elements.forEach((element: number) => {
      heap.insert(element)
    })
    heap.check()
    expect(heap.size()).toEqual(elements.length)
    extract_all(heap, elements)
  })

  it('should increase priority', () => {
    const heap = new PriorityQueue((a: number) => {
      return a
    }, elements.length)
    elements.forEach((element: number) => {
      heap.insert(element)
    })
    heap.check()
    expect(heap.size()).toEqual(elements.length)

    heap.increasePriority(55, 14)
    heap.increasePriority(18, 16)
    heap.increasePriority(81, 72)
    heap.increasePriority(9, 0)
    heap.increasePriority(43, 33)
    // decreasing priority should do nothing
    heap.increasePriority(72, 100)
    heap.increasePriority(12, 24)
    heap.increasePriority(39, 40)

    heap.check()
    // Elements after increasing priority
    const newElements: number[] = [
      12, 4, 33, 42, 0, 7, 39, 16, 14, 1, 51, 34, 72, 16
    ]
    extract_all(heap, newElements)
  })
})
