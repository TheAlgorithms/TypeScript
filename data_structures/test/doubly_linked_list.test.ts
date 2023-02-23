import { DoublyLinkedList } from "../doubly_linked_list";

describe("DoublyLinkedList", () => {
    it("should return true for isEmpty when list is empty", () => {
        const list = new DoublyLinkedList();

        expect(list.isEmpty()).toBeTruthy();
    });

    it("should return false for isEmpty when list is not empty", () => {
        const list = new DoublyLinkedList();
        list.push(1);

        expect(list.isEmpty()).toBeFalsy();
    });

    it("should return correct node for get", () => {
        const list = new DoublyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.get(1)).toBe(2);
    });

    it("should return null for get when index is out of bounds", () => {
        const list = new DoublyLinkedList();

        expect(list.get(1)).toBeNull();
    });

    it("should push nodes to the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.get(0)).toBe(3);
        expect(list.get(2)).toBe(1);
    });

    it("should pop nodes from the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.pop()).toBe(3);
        expect(list.get(0)).toBe(2);
        expect(list.get(1)).toBe(1);
    });

    it("should throw error for pop when list is empty", () => {
        const list = new DoublyLinkedList();

        expect(() => list.pop()).toThrowError("Index out of bounds");
    });

    it("should append nodes to the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.get(0)).toBe(1);
        expect(list.get(2)).toBe(3);
    });

    it("should remove tail from the list and return correct head and tail", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.removeTail()).toBe(3);
        expect(list.get(0)).toBe(1);
        expect(list.get(1)).toBe(2);
    });

    it("should return null for removeTail when list is empty", () => {
        const list = new DoublyLinkedList();

        expect(() => list.removeTail()).toThrowError("Index out of bounds");
    });

    it("should insert nodes at the correct index", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.insertAt(1, 4);

        expect(list.get(1)).toBe(4);
    });

    it("should remove nodes at the correct index", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.removeAt(1)).toBe(2);
    });

    it("should return null for removeAt when index is out of bounds", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(() => list.removeAt(3)).toThrowError("Index out of bounds");
    });

    it("should reverse the list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        list.reverse();

        expect(list.get(0)).toBe(3);
        expect(list.get(1)).toBe(2);
    });

    it("should return null for reverse when list is empty", () => {
        const list = new DoublyLinkedList();

        expect(list.reverse()).toBeNull();
    });

    it("should clear the list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        list.clear();

        expect(list.isEmpty()).toBeTruthy();
    });

    it("should convert the list to an array", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("should return correct length", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.getLength()).toBe(3);
    });
});
