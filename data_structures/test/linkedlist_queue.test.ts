
import { LinkedlistQueue } from './../linkedlist_queue';

describe("Testing Queue data structure", () => {
    it("enqueue should add a new element to the queue", () => {
        const queue = new LinkedlistQueue<number>();
        queue.enqueue(1);

        expect(queue.length).toBe(1);
    });

    it("isEmpty should return true on empty queue", () => {
        const queue = new LinkedlistQueue<number>();
        expect(queue.isEmpty()).toBeTruthy();
    });

    it("isEmpty should return false on not empty queue", () => {
        const queue = new LinkedlistQueue<number>();
        queue.enqueue(1);

        expect(queue.isEmpty()).toBeFalsy();
    });



    it("length should return the number of elements in the queue", () => {
        const queue = new LinkedlistQueue<number>();
        queue.enqueue(1);
        queue.enqueue(1);
        queue.enqueue(1);

        expect(queue.length).toBe(3);
    });

    it("dequeue should remove the first element", () => {
        const queue = new LinkedlistQueue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);


        expect(queue.length).toBe(3);
    });


});
