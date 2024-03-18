/**
 * An interface for linked lists, which shares the common methods.
 */
export interface LinkedList<T> {
  isEmpty(): boolean
  get(index: number): T | null | undefined
  push(data: T): void
  pop(): T | undefined
  append(data: T): void
  removeTail(): T | undefined
  insertAt(index: number, data: T): void
  removeAt(index: number): T | undefined
  clear(): void
  toArray(): (T | undefined)[]
  getLength(): number
}
