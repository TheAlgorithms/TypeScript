import { CircularQueue } from "../CircularQueue";

describe('CircularQueue data structure', () => {
  test("push and pop", () => {
    const queue = new CircularQueue<number>(5);
    [10, 20, 30].forEach((testValue) => queue.push(testValue));
    expect(queue.front()).toBe(10);
    expect(queue.pop()).toBe(10);
    expect(queue.front()).toBe(20);
    expect(queue.back()).toBe(30);
  })
  test("Empty queue case", () => {
    expect(() => (new CircularQueue<number>(0)).pop()).toThrow('Empty queue');
  })

  test("Maximum size reached case", () => {
    expect(() => (new CircularQueue<number>(0)).push(10)).toThrow('Maximum queue size reached');
  })
})
