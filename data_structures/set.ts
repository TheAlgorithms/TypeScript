/**
 * This interface is a representation of the Set data structure.
 */
export interface Set<T> {
    add(value: T): void;
    delete(value: T): void;
    has(value: T): boolean;
    clear(): void;
    values(): T[];
    getSize(): number;
}
