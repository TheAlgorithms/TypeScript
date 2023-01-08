import { DoublyLinkedList } from "../doubly_linked_list";

describe("Testing DoublyLinkedList Data Structure", () => {
    it("should return true for isEmpty when list is empty", () => {
        const list = new DoublyLinkedList();

        expect(list.isEmpty()).toBe(true);
    });

    it("should return false for isEmpty when list is not empty", () => {
        const list = new DoublyLinkedList();
        list.append(1);

        expect(list.isEmpty()).toBe(false);
    });

    it("should throw error for get when index is out of bounds", () => {
        const list = new DoublyLinkedList();

        expect(() => list.get(1)).toThrowError("Index out of bounds");
    });

    it("should return correct node for get", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.get(1)!.value).toBe(2);
    });

    it("should push nodes to the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.getHead()!.value).toBe(3);
        expect(list.getTail()!.value).toBe(1);
    });

    it("should pop nodes from the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.pop()!.value).toBe(3);
        expect(list.getHead()!.value).toBe(2);
        expect(list.getTail()!.value).toBe(1);
    });

    it("should append nodes to the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.getHead()!.value).toBe(1);
        expect(list.getTail()!.value).toBe(3);
    });

    it("should remove tail from the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.removeTail()!.value).toBe(3);
        expect(list.getHead()!.value).toBe(1);
        expect(list.getTail()!.value).toBe(2);
    });

    it("should insert nodes at the correct index", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.insertAt(1, 4);

        expect(list.get(1)!.value).toBe(4);
    });

    it("should remove nodes at the correct index", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.removeAt(1)!.value).toBe(2);
    });

    it("should reverse the list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        list.reverse();

        expect(list.getHead()!.value).toBe(3);
        expect(list.getTail()!.value).toBe(1);
    });

    it("should clear the list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        list.clear();

        expect(list.isEmpty()).toBe(true);
    });

    it("should convert the list to an array", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("should return null for head and tail when list is empty", () => {
        const list = new DoublyLinkedList();
        expect(list.getHead()).toBeNull();
        expect(list.getTail()).toBeNull();
    });

    it("should return correct length", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.getLength()).toBe(3);
    });
});
