/**
 * Represents the foundational architecture for caching mechanisms.
 * 
 * This abstract class defines the standard contract and shared state 
 * required by specialized cache implementations, ensuring a consistent 
 * interface for data storage and retrieval.
 *
 * @template K - The type of keys maintained by the cache.
 * @template V - The type of mapped values.
 */
export abstract class BaseCache<K, V> {
    /** 
     * The maximum number of items the cache is permitted to hold 
     * before eviction policies are triggered.
     */
    protected capacity: number;

    /**
     * Initializes a new instance of the BaseCache.
     *
     * @param capacity - The maximum allowed capacity of the cache.
     * @throws {Error} If the provided capacity is less than or equal to zero.
     */
    constructor(capacity: number) {
        if (capacity <= 0) throw new Error("Capacity must be positive");
        this.capacity = capacity;
    }

    /**
     * Retrieves the value associated with the specified key.
     *
     * @param key - The key whose associated value is to be returned.
     * @returns The value associated with the key, or undefined if the key does not exist.
     */
    abstract get(key: K): V | undefined;

    /**
     * Associates the specified value with the specified key in the cache.
     * If the cache previously contained a mapping for the key, the old value is replaced.
     *
     * @param key - The key with which the specified value is to be associated.
     * @param value - The value to be associated with the specified key.
     */
    abstract put(key: K, value: V): void;
}