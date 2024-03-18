import { Map } from './map'
import { Set } from './set'

/**
 * This class is a representation of the Set data structure based on a hash map.
 *
 * @template K The value type.
 * @implements Set<K>
 * @property {Map<K, null>} map The map used to store the set.
 */
export abstract class MapSet<K> implements Set<K> {
  private map: Map<K, null>

  constructor() {
    this.map = this.initMap()
  }

  /**
   * Initializes the map used to store the set.
   */
  protected abstract initMap(): Map<K, null>

  /**
   * Adds a new element to the set.
   *
   * @param value The value to add to the set.
   */
  add(value: K): void {
    this.map.set(value, null)
  }

  /**
   * Removes an element from the set.
   *
   * @param value The value to remove from the set.
   */
  delete(value: K): void {
    this.map.delete(value)
  }

  /**
   * Checks if the set contains a given value.
   *
   * @param value The value to check for.
   * @returns Whether the set contains the value.
   */
  has(value: K): boolean {
    return this.map.has(value)
  }

  /**
   * Removes all elements from the set.
   */
  clear(): void {
    this.map.clear()
  }

  /**
   * Returns an array of all the values in the set.
   *
   * @returns An array of all the values in the set.
   */
  values(): K[] {
    return this.map.keys()
  }

  /**
   * Returns the number of elements in the set.
   *
   * @returns The number of elements in the set.
   */
  getSize(): number {
    return this.map.getSize()
  }
}
