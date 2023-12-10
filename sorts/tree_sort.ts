/**
 * @author : tamaf96<https://github.com/tamaf96>
 * @description
 *  Tree Sort sorts a list by building a binary search tree and traverse is.
 * @param {number[]} arr - Array of numbers
 * @return {number[]} - The sorted Array.
 * @see <https://en.wikipedia.org/wiki/Tree_sort>
 */

import { BinarySearchTree } from "../data_structures/tree/binary_search_tree";

export const treeSort = (arr: number[]): number[] => {
  const searchTree = new BinarySearchTree<number>();
  for (const item of arr) {
    searchTree.insert(item);
  }
  return searchTree.inOrderTraversal();
};
