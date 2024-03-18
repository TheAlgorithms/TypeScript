/**
 * @author : tamaf96<https://github.com/tamaf96>
 * @description
 *  Tree Sort sorts a list by building a binary search tree and traversing it.
 * @param {T[]} arr - Array of comparable items
 * @return {T[]} - The sorted Array.
 * @see <https://en.wikipedia.org/wiki/Tree_sort>
 */

import { BinarySearchTree } from '../data_structures/tree/binary_search_tree'

export const treeSort = <T>(arr: T[]): T[] => {
  const searchTree = new BinarySearchTree<T>()
  for (const item of arr) {
    searchTree.insert(item)
  }
  return searchTree.inOrderTraversal()
}
