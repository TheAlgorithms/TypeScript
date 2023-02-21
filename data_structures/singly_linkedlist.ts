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

    addAtStart(data: T) {
        const newNode: Node<T> = {
            data: data, 
            next: this.head
       };
       this.head = newNode;
       this.len++;
    }

    addAtEnd(data: T) {
        const newNode: Node<T> = {
             data: data
        };
        if (this.head === undefined) {
            this.head = newNode;
        } else {
            let temp: Node<T> = this.head;
            while (temp.next != undefined) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.tail = newNode;
        this.len++;
    }

}