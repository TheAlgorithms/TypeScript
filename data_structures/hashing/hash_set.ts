import { HashTable } from "./hash_table";
import { Set } from "../set";

/**
 * This is an implementation of the Set data structure based on a HashTable.
 *
 * @template T The type of the elements in the set.
 * @implements Set<T>
 */
export class HashSet<T> implements Set<T> {
    private hashTable: HashTable<T, null>;

    constructor() {
        this.hashTable = new HashTable();
    }

    /**
     * Adds a new element to the set.
     *
     * @param value The value to add to the set.
     */
    add(value: T): void {
        this.hashTable.set(value, null);
    }

    /**
     * Removes an element from the set.
     *
     * @param value The value to remove from the set.
     */
    delete(value: T): void {
        this.hashTable.delete(value);
    }

    /**
     * Checks if the set contains a given value.
     *
     * @param value The value to check for.
     * @returns Whether the set contains the value.
     */
    has(value: T): boolean {
        return this.hashTable.has(value);
    }

    /**
     * Removes all elements from the set.
     */
    clear(): void {
        this.hashTable.clear();
    }

    /**
     * Returns an array of all the values in the set.
     *
     * @returns An array of all the values in the set.
     */
    values(): T[] {
        return this.hashTable.keys();
    }

    /**
     * Returns the number of elements in the set.
     *
     * @returns The number of elements in the set.
     */
    getSize(): number {
        return this.hashTable.getSize();
    }
}
