/**
 * Trie Data structure
 * It is a methodology of inserting word/string in O(n) time complexity where, n represents length of word
 *
 */

/**
 * TrieNode class definition
 */
class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isWord: boolean = false;
}

export class Trie {
  root: TrieNode = new TrieNode();

  constructor() {}

  /**
   *
   * @param word
   * @param position
   * @param letterMap
   * @returns
   *
   * Private method to insert word in letterMap of type (Trie)
   */
  private insertNode(node: TrieNode, word: string): void {
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  /**
   *
   * @param word
   * @param position
   * @param letterMap
   * @returns
   *
   * Private method implementation to search word in letterMap of type (Trie)
   *
   */

  private searchNode(
    node: TrieNode,
    word: string,
    prefixMatch: boolean
  ): boolean {
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return prefixMatch || node.isWord;
  }

  /**
   *
   * @param word
   * Method to add word in Trie
   */
  public add(word: string): this {
    this.insertNode(this.root, word);
    return this;
  }

  /**
   *
   * @param word
   * @returns
   * Method to find/search word inside letterMap which is of type Trie
   */
  public find(word: string, isPrefixMatch: boolean = false): boolean {
    return this.searchNode(this.root, word, isPrefixMatch);
  }
}
