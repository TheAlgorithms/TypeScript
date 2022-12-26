/**
 * This is a class-based implementation of a Queue.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It means that the first element that was added to the queue will be the first one to be removed.
 */
export class Queue<T> {
    private queue: T[] = [];
    private limit: number;

    /**
     * Sets an item limit for the queue.
     *
     * @param {number} [limit=Number.MAX_VALUE] The item limit of the queue.
     */
    constructor(limit: number = Number.MAX_VALUE) {
        this.limit = limit;
    }

    /**
     * Returns the number of items in the queue.
     *
     * @returns {number} The number of items in the queue.
     */
    length(): number {
        return this.queue.length;
    }

    /**
     * Checks if the queue is empty.
     *
     * @returns {boolean} Whether the queue is empty or not.
     */
    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    /**
     * Adds an item to the queue.
     *
     * @param item The item being added to the queue.
     * @throws Queue Overflow if the queue is full.
     */
    enqueue(item: T): void {
        if (this.queue.length + 1 > this.limit) {
            throw new Error("Queue Overflow");
        }

        this.queue.push(item);
    }

    /**
     * Removes an item from the queue.
     *
     * @throws Queue Underflow if the queue is empty.
     */
    dequeue(): void {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }

        this.queue.shift();
    }

    /**
     * Returns the item at the front of the queue.
     *
     * @returns The item at the front of the queue or null if the queue is empty.
     */
    front(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue[0];
    }
}
