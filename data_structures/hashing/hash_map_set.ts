import { Map } from "../map";
import { MapSet } from "../map_set";
import { HashMap } from "./hash_map";

/**
 * This class is a representation of the Set data structure based on a hash map.
 *
 * @template K The value type.
 * @extends MapSet<K>
 */
export class HashMapSet<K> extends MapSet<K> {
    constructor() {
        super();
    }

    /**
     * Initializes the map used to store the set.
     *
     * @returns {Map<K, null>} The map used to store the set.
     */
    protected initMap(): Map<K, null> {
        return new HashMap<K, null>();
    }
}
