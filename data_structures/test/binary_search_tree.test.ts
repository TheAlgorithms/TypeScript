import { BinarySearchTree } from '../binary_search_tree';

describe('BinarySearchTree', () => {
  describe('with filled binary search tree (insert)', () => {
    let binarySearchTree: BinarySearchTree<number>;

    beforeEach(() => {
      binarySearchTree = new BinarySearchTree<number>();
      binarySearchTree.insert(25);
      binarySearchTree.insert(80);
      binarySearchTree.insert(12);
      binarySearchTree.insert(5);
      binarySearchTree.insert(64);
    });

    it('should return false for isEmpty when binary search tree is not empty', () => {
      expect(binarySearchTree.isEmpty()).toBeFalsy();
    });

    it('should return correct root node for search', () => {
      expect(binarySearchTree.rootNode?.data).toBe(25);
    });

    it('should insert a new leaf node and return the correct child of the previous one', () => {
      binarySearchTree.insert(1);
      expect(binarySearchTree.search(5).leftChild?.data).toBe(1);
    });

    it('should traverse in in-order through the tree', () => {
      expect(binarySearchTree.inOrderTraversal(binarySearchTree.rootNode)).toStrictEqual([5, 12, 25, 64, 80]);
    });

    it('should traverse in pre-order through the tree', () => {
      expect(
        binarySearchTree.preOrderTraversal(binarySearchTree.rootNode),
      ).toStrictEqual([25, 5, 12, 64, 80]);
    });

    it('should traverse in post-order through the tree', () => {
      expect(
        binarySearchTree.postOrderTraversal(binarySearchTree.rootNode),
      ).toStrictEqual([5, 12, 64, 80, 25]);
    });

    it('should return the minimum value of the binary search tree', () => {
      expect(binarySearchTree.findMin()).toBe(5);
    });

    it('should return the maximum value of the binary search tree', () => {
      expect(binarySearchTree.findMax()).toBe(80);
    });
  });
});
