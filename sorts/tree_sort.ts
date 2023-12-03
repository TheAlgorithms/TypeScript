/**
 * @author : tamaf96<https://github.com/tamaf96>
 * @description
 *  Tree Sort sorts a list by building a binary search tree and traverse is.
 * @param {number[]} arr - Array of numbers
 * @return {number[]} - The sorted Array.
 * @see <https://en.wikipedia.org/wiki/Tree_sort>
 */

type BinaryTree<T> = {
  leftSubTree: BinaryTree<T> | null;
  node: T | null;
  rightSubTree: BinaryTree<T> | null;
};

export const treeSort = (arr: number[]): number[] => {
  const searchTree = emptyTree<number>();
  for (const item of arr) {
    insert(searchTree, item);
  }
  return inOrder(searchTree);
};

const emptyTree = <T,>(): BinaryTree<T> => ({
  leftSubTree: null,
  node: null,
  rightSubTree: null,
});

const insert = (searchTree: BinaryTree<number>, item: number): void => {
  if (searchTree.node === null) {
    searchTree.node = item;
  } else {
    if (item < searchTree.node) {
      if (searchTree.leftSubTree === null) {
        searchTree.leftSubTree = emptyTree<number>();
      }
      insert(searchTree.leftSubTree, item);
    } else {
      if (searchTree.rightSubTree === null) {
        searchTree.rightSubTree = emptyTree<number>();
      }
      insert(searchTree.rightSubTree, item);
    }
  }
};

const inOrder = (
  searchTree: BinaryTree<number> | null,
  arr: number[] = [],
): number[] => {
  if (searchTree === null || searchTree.node === null) {
    return [];
  } else {
    inOrder(searchTree.leftSubTree, arr);
    arr.push(searchTree.node);
    inOrder(searchTree.rightSubTree, arr);
  }
  return arr;
};
