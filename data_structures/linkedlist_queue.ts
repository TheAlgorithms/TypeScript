/**
 * This is an linkedlist-based implementation of a Queue.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It means that the first element that was added to the queue will be the first one to be removed.
 * The time complexity of the operations is O(n).
 
 */

/** USAGE

*Printers
*CPU task scheduling
*Callback queue in javascript

*/

type Node<T> = {
    value: T,
    next?: Node<T>,
}


export class LinkedQueue<T> {

    public length: number;
    public head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // adds elements to the rear/tail of the Queue
    enqueue(item: T): void {
        const node = { value: item } as Node<T>; // Creates a new node
        this.length++ // Increase the length of the Queue


        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node; // Updates  the next tail to the node created
        this.tail = node;  // The tail of the Queue then becomes the node created!!

    }
    // Remove elements to the front/head of the Queue
    deque(): T | undefined {

        // If there is no head return undefined
        if (!this.head) {
            return undefined;
        }

        this.length--;
        let head = this.head; // We store the head in order not to lose track of it
        this.head = this.head.next; // Update the the head to the next node
        return head.value; // Return the value of the head
    }


    // Returns the value of the head
    peek(): T | undefined {
        return this.head?.value;
    }

    // Returns true if the Queue is empty
    isEmpty(): boolean {
        return this.length == 0
    }
}

