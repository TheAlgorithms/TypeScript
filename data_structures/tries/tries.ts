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

  private insertNode(node: TrieNode, word: string): void {
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }


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
   * Method to add word in Trie
   */
  public add(word: string): this {
    this.insertNode(this.root, word);
    return this;
  }

  /**
   * @param word
   * @returns
   * Method to find/search word inside letterMap which is of type Trie
   */

  //isPrefixMatch is a parameter used to specify whether we perform prefix match or not
  public find(word: string, isPrefixMatch: boolean = false): boolean {
    return this.searchNode(this.root, word, isPrefixMatch);
  }
}
