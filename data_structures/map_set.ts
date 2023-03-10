import { HashMap } from "./hashing/hash_map";

/**
 * This interface is a representation of the Set data structure.
 */
export interface Set<K> {
    getSize(): number;
    add(value: K): void;
    get(value: K): K | null;
    delete(value: K): void;
    has(value: K): boolean;
    clear(): void;
    values(): K[];
}

/**
 * This class is a representation of the Set data structure based on a hash map.
 *
 * @template K The value type.
 * @implements Set<K>
 * @property {Map<K, null>} hashTable The hash map used to store the set.
 */
export abstract class MapSet<K> implements Set<K> {
    private hashTable: HashMap<K, null>;

    constructor() {
        this.hashTable = new HashMap();
    }

    /**
     * Adds a new element to the set.
     *
     * @param value The value to add to the set.
     */
    add(value: K): void {
        this.hashTable.set(value, null);
    }

    /**
     * Gets a value from the set.
     *
     * @param value The value to get from the set.
     * @returns The value if it exists, null otherwise.
     */
    get(value: K): K | null {
        return this.hashTable.get(value);
    }

    /**
     * Removes an element from the set.
     *
     * @param value The value to remove from the set.
     */
    delete(value: K): void {
        this.hashTable.delete(value);
    }

    /**
     * Checks if the set contains a given value.
     *
     * @param value The value to check for.
     * @returns Whether the set contains the value.
     */
    has(value: K): boolean {
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
    values(): K[] {
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
