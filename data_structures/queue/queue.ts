export interface Queue<T> {
  enqueue(item: T): void
  dequeue(): T | undefined
  peek(): T | undefined | null
  isEmpty(): boolean
  length(): number
}
