
import { LinkedQueue } from './../linkedlist_queue';

describe("Testing Queue data structure", () => {
    it("enqueue should add a new element to the queue", () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);

        expect(queue.length()).toBe(1);
    });

    it("isEmpty should return true on empty queue", () => {
        const queue = new LinkedQueue<number>();
        expect(queue.isEmpty()).toBeTruthy();
    });

    it("isEmpty should return false on not empty queue", () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);

        expect(queue.isEmpty()).toBeFalsy();
    });

    it("front should return the first value", () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);

        expect(queue.peek()).toBe(1);
    });

    it("front should return null when the queue is empty", () => {
        const queue = new LinkedQueue<number>();

        expect(queue.peek()).toBe(undefined);
    });

    it("length should return the number of elements in the queue", () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);
        queue.enqueue(1);
        queue.enqueue(1);

        expect(queue.length()).toBe(3);
    });

    it("dequeue should remove the first element", () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();

        expect(queue.length()).toBe(2);
    });

    it("dequeue should throw error on empty queue", () => {
        const queue = new LinkedQueue<number>();

        expect(() => queue.dequeue()).toThrow("Queue Underflow");
    });
});
