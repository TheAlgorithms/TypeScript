/* The queue data strcture is sequential collection of elements that
follows the priciple of FIFO */
/*here we are using a singly linkedlist so we are only going to traverse to the next node */

/*USAGE
*Printers
*CPU task scheduling
*Callback queue in javascript

*/

type Node<T> = {
    value: T,
    next?: Node<T>,
}


export class LinkedlistQueue<T> {

    public length: number;
    public head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;  //when a new linkedlist is created the head becomes equal to the tail .
        this.length = 0;
    }

    // adds elements to the rear/tail of the collection.
    enqueue(item: T): void {
        const node = { value: item } as Node<T>; //creates a new node
        this.length++ //increase the length  of the linkedlist


        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node; //updates  the next tail to the node created
        this.tail = node;  //the tail of the linkedlist then becomes the node created!!

    }
    //remove elements to the front/head of the collection
    deque(): T | undefined {
        if (!this.head) {
            return undefined; //if there is no head return undefined
        }
        this.length--;
        let head = this.head; //we store the head in order not to lose track of it
        this.head = this.head.next; //update the the head to the next node
        return head.value; // return the value of the head
    }


    // returns the value of the head
    peek(): T | undefined {
        return this.head?.value;
    }

    // checks if the the linkedlist is empty
    isEmpty(): boolean {
        return this.length == 0
    }
}

