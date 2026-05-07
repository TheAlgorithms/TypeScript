import { BaseCache } from './BaseCache';

/**
 * Represents a single node within the doubly linked list utilized by the LRU Cache.
 * 
 * @template K - The type of the key.
 * @template V - The type of the value.
 */
class Node<K, V> {
    /**
     * Initializes a new instance of the Node.
     * 
     * @param key - The identifying key for the node.
     * @param value - The data value stored within the node.
     * @param prev - Reference to the preceding node in the sequence.
     * @param next - Reference to the succeeding node in the sequence.
     */
    constructor(
        public key: K,
        public value: V,
        public prev: Node<K, V> | null = null,
        public next: Node<K, V> | null = null
    ) { }
}

/**
 * A Least Recently Used (LRU) Cache implementation.
 * 
 * This advanced cache automatically evicts the least recently accessed items 
 * when the strictly defined capacity limit is reached. It systematically combines 
 * a native Hash Map for constant-time lookups with a Doubly Linked List to 
 * guarantee that both `get` and `put` operations execute in rigorous O(1) time complexity.
 *
 * @template K - The type of keys maintained by the cache.
 * @template V - The type of mapped values.
 */
export class LRUCache<K, V> extends BaseCache<K, V> {
    /**
     * An internal hash map establishing an O(1) lookup index for cache nodes.
     */
    private map: Map<K, Node<K, V>> = new Map();

    /**
     * The vanguard of the doubly linked list, exclusively holding the most recently utilized item.
     */
    private head: Node<K, V> | null = null;

    /**
     * The rearguard of the doubly linked list, designating the least recently utilized item 
     * (the prime candidate for the next eviction).
     */
    private tail: Node<K, V> | null = null;

    /**
     * Instantiates an LRUCache with a precise maximum capacity.
     *
     * @param capacity - The absolute maximum number of key-value pairs the cache can concurrently retain.
     */
    constructor(capacity: number) {
        super(capacity);
    }

    /**
     * Retrieves the precise value associated with the specified key, synchronously 
     * elevating the corresponding item to "most recently used" status.
     *
     * @param key - The key whose associated value is to be targeted.
     * @returns The value associated with the key, or `undefined` if the cache miss occurs.
     */
    get(key: K): V | undefined {
        const node = this.map.get(key);
        if (!node) return undefined;

        this.moveToFront(node);
        return node.value;
    }

    /**
     * Inserts or seamlessly updates a key-value mapping within the cache structure. 
     * If the addition violates the cache's capacity constraint, the least recently 
     * utilized item is systematically purged.
     *
     * @param key - The key to insert or update.
     * @param value - The updated value to bind to the given key.
     */
    put(key: K, value: V): void {
        const existingNode = this.map.get(key);

        if (existingNode) {
            existingNode.value = value;
            this.moveToFront(existingNode);
        } else {
            if (this.map.size >= this.capacity) {
                this.evictLeastRecentlyUsed();
            }

            const newNode = new Node(key, value);
            this.map.set(key, newNode);
            this.addToFront(newNode);
        }
    }

    /**
     * Re-links a specific, active node to the pinnacle (head) of the linked list.
     * 
     * @param node - The node requiring promotion.
     */
    private moveToFront(node: Node<K, V>): void {
        if (node === this.head) return;

        this.removeNode(node);
        this.addToFront(node);
    }

    /**
     * Injects a novel node directly at the head of the linked list.
     * 
     * @param node - The freshly instantiated node to insert.
     */
    private addToFront(node: Node<K, V>): void {
        node.next = this.head;
        node.prev = null;

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
    }

    /**
     * Surgically detaches a specific node from its surrounding linked list neighbors.
     * 
     * @param node - The target node to isolate and remove.
     */
    private removeNode(node: Node<K, V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }

    /**
     * Executes the eviction protocol, purging the least recently utilized node 
     * from both the linked list hierarchy and the primary map index.
     */
    private evictLeastRecentlyUsed(): void {
        if (!this.tail) return;

        this.map.delete(this.tail.key);
        this.removeNode(this.tail);
    }
}