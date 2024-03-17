import { LinkedList } from './linked_list'

/**
 * Represents a node in a linked list.
 *
 * @template T The type of the data stored in the node.
 * @property data The data stored in the node.
 * @property next A reference to the next node in the list. Can reference to null, if there is no next element.
 */
class ListNode<T> {
  constructor(
    public data: T,
    public next?: ListNode<T>
  ) {}
}

/**
 * This is an implementation of a (singly) linked list.
 * A linked list is a data structure that stores each element with a pointer (or reference) to the next element
 * in the list. Therefore, it is a linear data structure, which can be resized dynamically during runtime, as there is
 * no fixed memory block allocated.
 *
 * @template T The type of the value of the nodes.
 * @property head The head of the list.
 * @property tail The tail of the list.
 * @property length The length of the list.
 */
export class SinglyLinkedList<T> implements LinkedList<T> {
  private head?: ListNode<T>
  private tail?: ListNode<T>
  private length: number

  /**
   * Creates a new, empty linked list.
   */
  constructor() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  /**
   * Checks, if the list is empty.
   *
   * @returns Whether the list is empty or not.
   */
  isEmpty(): boolean {
    return !this.head
  }

  /**
   * Gets the data of the node at the given index.
   * Time complexity: linear (O(n))
   *
   * @param index The index of the node.
   * @returns The data of the node at the given index or null, if no data is present.
   */
  get(index: number): T | null {
    if (index < 0 || index >= this.length) {
      return null
    }

    if (this.isEmpty()) {
      return null
    }

    let currentNode: ListNode<T> = this.head!
    for (let i: number = 0; i < index; i++) {
      if (!currentNode.next) {
        return null
      }

      currentNode = currentNode.next
    }

    return currentNode.data
  }

  /**
   * Inserts the given data as the first node of the list.
   * Time complexity: constant (O(1))
   *
   * @param data The data to be inserted.
   */
  push(data: T): void {
    const node: ListNode<T> = new ListNode<T>(data)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++
  }

  /**
   * Removes the first node of the list.
   * Time complexity: constant (O(1))
   *
   * @returns The data of the node that was removed.
   * @throws Index out of bounds if the list is empty.
   */
  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Index out of bounds')
    }

    const node: ListNode<T> = this.head!
    this.head = this.head!.next
    this.length--

    return node.data
  }

  /**
   * Inserts the given data as a new node after the current TAIL.
   * Time complexity: constant (O(1))
   *
   * @param data The data of the node being inserted.
   */
  append(data: T): void {
    const node: ListNode<T> = new ListNode<T>(data)

    if (this.isEmpty()) {
      this.head = node
    } else {
      this.tail!.next = node
    }

    this.tail = node
    this.length++
  }

  /**
   * Removes the current TAIL of the list.
   * Time complexity: linear (O(n))
   *
   * @returns The data of the former TAIL.
   * @throws Index out of bounds if the list is empty.
   */
  removeTail(): T {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    const currentTail = this.tail
    if (this.head === this.tail) {
      this.head = undefined
      this.tail = undefined
      this.length--

      return currentTail!.data
    }

    let currentNode: ListNode<T> = this.head
    while (currentNode.next !== currentTail) {
      currentNode = currentNode.next!
    }

    this.tail = currentNode
    this.length--

    return currentTail!.data
  }

  /**
   * Inserts the data as a new node at the given index.
   * Time complexity: O(n)
   *
   * @param index The index where the node is to be inserted.
   * @param data The data to insert.
   * @throws Index out of bounds, when given an invalid index.
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds')
    }

    if (index === 0) {
      this.push(data)

      return
    }

    if (index === this.length) {
      this.append(data)

      return
    }

    const newNode = new ListNode<T>(data)
    let currentNode: ListNode<T> | undefined = this.head
    for (let i: number = 0; i < index - 1; i++) {
      currentNode = currentNode?.next
    }

    const nextNode = currentNode?.next
    currentNode!.next = newNode
    newNode.next = nextNode

    this.length++
  }

  /**
   * Removes the node at the given index.
   * Time complexity: O(n)
   *
   * @param index The index of the node to be removed.
   * @returns The data of the removed node.
   * @throws Index out of bounds, when given an invalid index.
   */
  removeAt(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }

    if (index === 0) {
      return this.pop()
    }

    if (index === this.length - 1) {
      return this.removeTail()
    }

    let previousNode: ListNode<T> | undefined
    let currentNode: ListNode<T> | undefined = this.head
    for (let i: number = 0; i < index; i++) {
      if (i === index - 1) {
        previousNode = currentNode
      }

      currentNode = currentNode?.next
    }

    previousNode!.next = currentNode?.next
    this.length--

    return currentNode!.data
  }

  /**
   * Clears the list.
   */
  clear(): void {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  /**
   * Converts the list to an array.
   *
   * @returns The array representation of the list.
   */
  toArray(): T[] {
    const array: T[] = []
    let currentNode: ListNode<T> | undefined = this.head

    while (currentNode) {
      array.push(currentNode.data)
      currentNode = currentNode.next
    }

    return array
  }

  /**
   * Gets the length of the list.
   *
   * @returns The length of the list.
   */
  getLength(): number {
    return this.length
  }
}
