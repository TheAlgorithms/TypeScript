import { LRUCache } from '../LRUCache';
import { BaseCache } from '../BaseCache';

/**
 * Test Suite: Least Recently Used (LRU) Cache Implementation
 * 
 * This suite rigorously validates the functional requirements of the LRUCache,
 * ensuring robust key-value storage, correct eviction policies upon reaching 
 * capacity, and O(1) update characteristics when items are accessed.
 */
describe('LRUCache', () => {
    let lru: LRUCache<string, number>;

    beforeEach(() => {
        // Initialize the cache with a constrained capacity to systematically trigger and verify eviction logic.
        lru = new LRUCache<string, number>(3);
    });

    it('should be an instance of BaseCache', () => {
        expect(lru).toBeInstanceOf(BaseCache);
    });

    it('should successfully store and retrieve standard key-value pairs', () => {
        lru.put('a', 1);
        lru.put('b', 2);
        expect(lru.get('a')).toBe(1);
        expect(lru.get('b')).toBe(2);
    });

    it('should gracefully return undefined for queries on non-existent keys', () => {
        expect(lru.get('non-existent')).toBeUndefined();
    });

    it('should accurately update the value corresponding to an existing key', () => {
        lru.put('a', 1);
        lru.put('a', 10);
        expect(lru.get('a')).toBe(10);
    });

    it('should strictly evict the least recently used item when the maximum capacity is exceeded', () => {
        lru.put('a', 1); // State: [a]
        lru.put('b', 2); // State: [b, a]
        lru.put('c', 3); // State: [c, b, a]

        // Inserting a 4th element must trigger the eviction of 'a' (the current tail)
        lru.put('d', 4); // State: [d, c, b]

        expect(lru.get('a')).toBeUndefined();
        expect(lru.get('b')).toBe(2);
        expect(lru.get('c')).toBe(3);
        expect(lru.get('d')).toBe(4);
    });

    it('should successfully re-prioritize an accessed item to the front of the cache (Most Recently Used)', () => {
        lru.put('a', 1);
        lru.put('b', 2);
        lru.put('c', 3); // State: [c, b, a]

        // Accessing 'a' promotes it to the head, making it the most recently used
        lru.get('a'); // State: [a, c, b]

        // Consequently, 'b' falls to the tail position and becomes the next candidate for eviction
        lru.put('d', 4); // State: [d, a, c]

        expect(lru.get('b')).toBeUndefined();
        expect(lru.get('a')).toBe(1);
        expect(lru.get('c')).toBe(3);
        expect(lru.get('d')).toBe(4);
    });

    it('should maintain strict operational integrity even with a minimal capacity of 1', () => {
        const smallLru = new LRUCache<string, number>(1);
        smallLru.put('a', 1);
        smallLru.put('b', 2);

        expect(smallLru.get('a')).toBeUndefined();
        expect(smallLru.get('b')).toBe(2);
    });
});