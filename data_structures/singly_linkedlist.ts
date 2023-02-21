type Node<T> = {
    data: T,
    next: Node<T>
}

class LinkedList<T> {
    private head: Node<T>;
    private tail: Node<T>;
    private len: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.len = 0;
    }
}