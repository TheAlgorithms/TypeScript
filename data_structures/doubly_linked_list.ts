/**
 * This is an implementation of a Doubly Linked List.
 * A Doubly Linked List is a data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to the next and previous node (can be null).
 * The time complexity of the operations is O(n).
 * 
 * @see https://www.geeksforgeeks.org/doubly-linked-list/
 * 
 * @template T The type of the value of the nodes.
 * @property {DoublyLinkedListNode<T> | null} head The head of the list.
 * @property {DoublyLinkedListNode<T> | null} tail The tail of the list.
 * @property {number} length The length of the list.
 */
export class DoublyLinkedList<T> {
    private head: DoublyLinkedListNode<T> | null = null;
    private tail: DoublyLinkedListNode<T> | null = null;
    private length: number = 0;

    /**
     * Checks if the list is empty.
     *
     * @returns {boolean} Whether the list is empty or not.
     */
    isEmpty(): boolean {
        return !this.head;
    }

    /**
     * Gets a node at a specific index.
     *
     * @param index The index of the node.
     * @returns The node at the index.
     * @throws Index out of bounds if the index is not valid.
     */
    get(index: number): DoublyLinkedListNode<T> | null {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let currentNode: DoublyLinkedListNode<T> | null = this.head;
        let i = 0;

        while (i < index) {
            currentNode = currentNode!.next;
            i++;
        }

        return currentNode;
    }

    /**
     * Inserts a node at the head of the list.
     *
     * @param value The value of the node being inserted.
     */
    push(value: T): void {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    /**
     * Removes a node from the head of the list.
     *
     * @returns The node that was removed.
     */
    pop(): DoublyLinkedListNode<T> | null {
        if (!this.head) {
            return null;
        }

        const removedNode = this.head;

        if (this.head === this.tail) {
            this.tail = null;
        } else {
            this.head.next!.prev = null;
        }

        this.head = this.head.next;
        this.length--;

        return removedNode;
    }

    /**
     * Inserts a node at the tail of the list.
     *
     * @param value The value of the node being inserted.
     */
    append(value: T): void {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;
    }

    /**
     * Removes a node from the tail of the list.
     *
     * @returns The node that was removed.
     */
    removeTail(): DoublyLinkedListNode<T> | null {
        if (!this.head) {
            return null;
        }

        const removedNode = this.tail;

        if (this.head === this.tail) {
            this.head = null;
        } else {
            this.tail!.prev!.next = null;
        }

        this.tail = this.tail!.prev;
        this.length--;

        return removedNode;
    }

    /**
     * Inserts a node at a specific index.
     *
     * @param index The index where the node will be inserted.
     * @param value The value of the node being inserted.
     * @throws Index out of bounds if the index is not valid.
     */
    insertAt(index: number, value: T): void {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            this.push(value);
            return;
        }

        if (index === this.length) {
            this.append(value);
            return;
        }

        const newNode = new DoublyLinkedListNode(value);
        const prevNode = this.get(index - 1)!;
        const nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode!.prev = newNode;

        this.length++;
    }

    /**
     * Removes a node at a specific index.
     *
     * @param index The index of the node to be removed.
     * @returns The node that was removed.
     * @throws Index out of bounds if the index is not valid.
     */
    removeAt(index: number): DoublyLinkedListNode<T> | null {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            return this.pop();
        }

        if (index === this.length - 1) {
            return this.removeTail();
        }

        const removedNode = this.get(index)!;
        removedNode.prev!.next = removedNode.next;
        removedNode.next!.prev = removedNode.prev;

        this.length--;

        return removedNode;
    }

    /**
     * Reverses the list.
     *
     * @returns The reversed list.
     */
    reverse(): void {
        if (!this.head) {
            return;
        }

        let currentNode: DoublyLinkedListNode<T> | null = this.head;
        let nextNode: DoublyLinkedListNode<T> | null = null;
        let prevNode: DoublyLinkedListNode<T> | null = null;

        while (currentNode) {
            nextNode = currentNode.next;
            prevNode = currentNode.prev;

            currentNode.next = prevNode;
            currentNode.prev = nextNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;
    }

    /**
     * Removes all nodes from the list.
     */
    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Converts the list to an array.
     *
     * @returns The array representation of the list.
     */
    toArray(): T[] {
        const array: T[] = [];

        let currentNode: DoublyLinkedListNode<T> | null = this.head;

        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    /**
     * Gets the head of the list.
     *
     * @returns The head of the list.
     */
    getHead(): DoublyLinkedListNode<T> | null {
        return this.head;
    }

    /**
     * Gets the tail of the list.
     *
     * @returns The tail of the list.
     */
    getTail(): DoublyLinkedListNode<T> | null {
        return this.tail;
    }

    /**
     * Gets the length of the list.
     *
     * @returns The length of the list.
     */
    getLength(): number {
        return this.length;
    }
}

/**
 * Represents a node in a doubly linked list.
 *
 * @template T The type of the value stored in the node.
 * @property value The value stored in the node.
 * @property next The next node after this node.
 * @property prev The previous node before this node.
 */
export class DoublyLinkedListNode<T> {
    constructor(
        public value: T,
        public next: DoublyLinkedListNode<T> | null = null,
        public prev: DoublyLinkedListNode<T> | null = null
    ) {}
}
