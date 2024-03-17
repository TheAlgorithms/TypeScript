/**
 * Represents a node of a binary search tree.
 *
 * @template T The type of the value stored in the node.
 */
class TreeNode<T> {
  constructor(
    public data: T,
    public leftChild?: TreeNode<T>,
    public rightChild?: TreeNode<T>
  ) {}
}

/**
 * An implementation of a binary search tree.
 *
 * A binary tree is a tree with only two children per node. A binary search tree on top sorts the children according
 * to following rules:
 * - left child < parent node
 * - right child > parent node
 * - all children on the left side < root node
 * - all children on the right side > root node
 *
 * For profound information about trees
 * @see https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/
 *
 * @template T The data type of the values in the binary tree.
 */
export class BinarySearchTree<T> {
  rootNode?: TreeNode<T>

  /**
   * Instantiates the binary search tree.
   *
   * @param rootNode The root node.
   */
  constructor() {
    this.rootNode = undefined
  }

  /**
   * Checks, if the binary search tree is empty, i. e. has no root node.
   *
   * @returns Whether the binary search tree is empty.
   */
  isEmpty(): boolean {
    return this.rootNode === undefined
  }

  /**
   * Checks whether the tree has the given data or not.
   *
   * @param data The data to check for.
   */
  has(data: T): boolean {
    if (!this.rootNode) {
      return false
    }

    let currentNode = this.rootNode
    while (currentNode.data !== data) {
      if (data > currentNode.data) {
        if (!currentNode.rightChild) {
          return false
        }

        currentNode = currentNode.rightChild
      } else {
        if (!currentNode.leftChild) {
          return false
        }

        currentNode = currentNode.leftChild
      }
    }

    return true
  }

  /**
   * Inserts the given data into the binary search tree.
   *
   * @param data The data to be stored in the binary search tree.
   * @returns
   */
  insert(data: T): void {
    if (!this.rootNode) {
      this.rootNode = new TreeNode<T>(data)
      return
    }

    let currentNode: TreeNode<T> = this.rootNode
    while (true) {
      if (data > currentNode.data) {
        if (currentNode.rightChild) {
          currentNode = currentNode.rightChild
        } else {
          currentNode.rightChild = new TreeNode<T>(data)
          return
        }
      } else {
        if (currentNode.leftChild) {
          currentNode = currentNode.leftChild
        } else {
          currentNode.leftChild = new TreeNode<T>(data)
          return
        }
      }
    }
  }

  /**
   * Finds the minimum value of the binary search tree.
   *
   * @returns The minimum value of the binary search tree
   */
  findMin(): T {
    if (!this.rootNode) {
      throw new Error('Empty tree.')
    }

    const traverse = (node: TreeNode<T>): T => {
      return !node.leftChild ? node.data : traverse(node.leftChild)
    }

    return traverse(this.rootNode)
  }

  /**
   * Finds the maximum value of the binary search tree.
   *
   * @returns The maximum value of the binary search tree
   */
  findMax(): T {
    if (!this.rootNode) {
      throw new Error('Empty tree.')
    }

    const traverse = (node: TreeNode<T>): T => {
      return !node.rightChild ? node.data : traverse(node.rightChild)
    }

    return traverse(this.rootNode)
  }

  /**
   * Traverses to the binary search tree in in-order, i. e. it follow the schema of:
   * Left Node -> Root Node -> Right Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  inOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array
    }

    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array
      }

      traverse(node.leftChild, array)
      array.push(node.data)
      traverse(node.rightChild, array)
      return array
    }

    return traverse(this.rootNode)
  }

  /**
   * Traverses to the binary search tree in pre-order, i. e. it follow the schema of:
   * Root Node -> Left Node -> Right Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  preOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array
    }

    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array
      }

      array.push(node.data)
      traverse(node.leftChild, array)
      traverse(node.rightChild, array)

      return array
    }

    return traverse(this.rootNode)
  }

  /**
   * Traverses to the binary search tree in post-order, i. e. it follow the schema of:
   * Left Node -> Right Node -> Root Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  postOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array
    }

    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array
      }

      traverse(node.leftChild, array)
      traverse(node.rightChild, array)
      array.push(node.data)

      return array
    }

    return traverse(this.rootNode)
  }
}
