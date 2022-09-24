/**
 * [QuickSelect](https://www.geeksforgeeks.org/quickselect-algorithm/) is an algorithm to find the kth smallest number
 *
 * Notes:
 * - QuickSelect is related to QuickSort, thus has optimal best and average case (O(n)) but unlikely poor worst case (O(n^2))
 * - This implementation uses randomly selected pivots for better performance
 * ----
 * @complexity : O(n) (on average )
 * @complexity : O(n^2) (worst case)
 * ----
 * @param items array
 */

const QuickSelect = (items: Array<number>, kth: number): number => {
  // eslint-disable-line no-unused-vars
  if (kth < 1 || kth > items.length) {
    throw new RangeError("Index Out of Bound");
  }

  return RandomizedSelect(items, 0, items.length - 1, kth);
};

/**
 * @param items
 * @param left
 * @param right
 * @param i
 * @returns number
 */
const RandomizedSelect = (
  items: Array<number>,
  left: number,
  right: number,
  i: number
): number => {
  if (left === right) return items[left];

  const pivotIndex = RandomizedPartition(items, left, right);
  const k = pivotIndex - left + 1;

  if (i === k) return items[pivotIndex];
  if (i < k) return RandomizedSelect(items, left, pivotIndex - 1, i);

  return RandomizedSelect(items, pivotIndex + 1, right, i - k);
};
/**
 * 
 * @param items 
 * @param left 
 * @param right 
 * @returns 
 */
const RandomizedPartition = (
  items: Array<number>,
  left: number,
  right: number
): number => {
  const rand = getRandomInt(left, right);
  Swap(items, rand, right);
  return Partition(items, left, right);
};
/**
 * 
 * @param items 
 * @param left 
 * @param right 
 * @returns 
 */
const Partition = (items: Array<number>, left: number, right: number) : number => {
  const x = items[right];
  let pivotIndex = left - 1;

  for (let j = left; j < right; j++) {
    if (items[j] <= x) {
      pivotIndex++;
      Swap(items, pivotIndex, j);
    }
  }

  Swap(items, pivotIndex + 1, right);

  return pivotIndex + 1;
};

/**
 * 
 * @param min 
 * @param max 
 * @returns 
 */
const getRandomInt = (min : number, max : number) : number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * 
 * @param arr array
 * @param x array element to swap
 * @param y array element to swap
 */
const Swap = (arr : Array<number>, x : number, y : number) : void => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

export { QuickSelect };
