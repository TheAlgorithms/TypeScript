export interface Heap<T> {
  insert(value: T): void;
  extract?(): T;
  size(): number;
  isEmpty(): boolean;
}
