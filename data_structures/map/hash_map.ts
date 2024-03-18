import { Map } from './map'

/**
 * Represents a hash map.
 * Time complexity:
 * - Set, Get, Delete, Has: O(1) on average, O(n) in the worst case.
 * - Clear: O(m) where m is the number of buckets.
 * - Keys, Values, Entires: O(n + m).
 *
 * @template K The key type.
 * @template V The value type.
 * @param size The size of the hash map.
 * @param buckets The buckets in which to store the key-value pairs.
 * @param loadFactor The load factor to determine when to resize the hash map.
 */
export class HashMap<K, V> implements Map<K, V> {
  private size!: number
  private buckets!: MapEntry<K, V>[][]
  private readonly loadFactor = 0.75

  constructor() {
    this.clear()
  }

  /**
   * Gets the size.
   *
   * @returns The size.
   */
  getSize(): number {
    return this.size
  }

  /**
   * Sets a key-value pair.
   *
   * @param key The key.
   * @param value The value.
   */
  set(key: K, value: V): void {
    const loadFactor = this.size / this.buckets.length
    if (loadFactor > this.loadFactor) {
      this.resize()
    }

    const index = this.hash(key)
    const bucket = this.buckets[index]

    if (bucket.length === 0) {
      bucket.push(new MapEntry(key, value))
      this.size++
      return
    }

    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value
        return
      }
    }

    bucket.push(new MapEntry(key, value))
    this.size++
  }

  /**
   * Gets a value.
   *
   * @param key The key to get the value for.
   * @returns The value or null if the key does not exist.
   */
  get(key: K): V | null {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value
      }
    }

    return null
  }

  /**
   * Deletes a key-value pair.
   *
   * @param key The key whose key-value pair to delete.
   */
  delete(key: K): void {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    for (const entry of bucket) {
      if (entry.key === key) {
        bucket.splice(bucket.indexOf(entry), 1)
        this.size--
        return
      }
    }
  }

  /**
   * Checks if a key exists.
   *
   * @param key The key.
   * @returns Whether the key exists.
   */
  has(key: K): boolean {
    const index = this.hash(key)
    const bucket = this.buckets[index]

    for (const entry of bucket) {
      if (entry.key === key) {
        return true
      }
    }

    return false
  }

  /**
   * Clears the hash map.
   */
  clear(): void {
    this.size = 0
    this.initializeBuckets(16)
  }

  /**
   * Gets all keys.
   *
   * @returns The keys.
   */
  keys(): K[] {
    const keys: K[] = []
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        keys.push(entry.key)
      }
    }

    return keys
  }

  /**
   * Gets all values.
   *
   * @returns The values.
   */
  values(): V[] {
    const values: V[] = []
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        values.push(entry.value)
      }
    }

    return values
  }

  /**
   * Gets all entries.
   *
   * @returns The entries.
   */
  entries(): MapEntry<K, V>[] {
    const entries: MapEntry<K, V>[] = []
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        entries.push(entry)
      }
    }

    return entries
  }

  /**
   * Initializes the buckets.
   *
   * @param amount The amount of buckets to initialize.
   */
  private initializeBuckets(amount: number): void {
    this.buckets = []
    for (let i = 0; i < amount; i++) {
      this.buckets.push([])
    }
  }

  /**
   * Hashes a key to an index.
   * This implementation uses the djb2 algorithm, which might not be the best.
   * Feel free to change it to something else.
   *
   * @param key The key.
   * @return The index.
   */
  protected hash(key: K): number {
    let hash = 0

    for (let i = 0; i < String(key).length; i++) {
      hash = (hash << 5) - hash + String(key).charCodeAt(i)
    }

    return hash % this.buckets.length
  }

  /**
   * Resizes the hash map by doubling the amount of buckets.
   */
  private resize(): void {
    const entries = this.entries()

    this.initializeBuckets(this.buckets.length * 2)
    this.size = 0

    for (const entry of entries) {
      this.set(entry.key, entry.value)
    }
  }
}

/**
 * Represents a key-value pair.
 *
 * @template K The type of the key.
 * @template V The type of the value.
 * @param key The key.
 * @param value The value.
 */
export class MapEntry<K, V> {
  key: K
  value: V

  constructor(key: K, value: V) {
    this.key = key
    this.value = value
  }
}
