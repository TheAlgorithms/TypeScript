import { Queue } from "../Queue";

describe('Queue data structure', () => {
  let queue = new Queue<number>(5);
  test("push and pop", () => {
    [10, 20, 30].forEach((testValue) => queue.push(testValue));
    expect(queue.front()).toBe(10);
    expect(queue.pop()).toBe(10);
    expect(queue.front()).toBe(20);
    expect(queue.back()).toBe(30);
  })
  test("Empty queue case", () => {
    expect(() => (new Queue<number>(0)).pop()).toThrow('Empty queue');
  })

  test("Maximum size reached case", () => {
    expect(() => (new Queue<number>(0)).push(10)).toThrow('Maximum queue size reached');
  })
})
