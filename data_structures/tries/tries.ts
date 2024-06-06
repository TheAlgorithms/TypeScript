/**
 * Represents a node in a Trie data structure.
 */
class TrieNode {
  /**
   * An object that stores child nodes for each character in the alphabet.
   */
  children: Record<string, TrieNode> = {}

  /**
   * Indicates whether the node represents the end of a word.
   */
  isWord = false
}

/**
 * Trie Data structure for storing and searching words.
 */
export class Trie {
  /**
   * The root node of the Trie.
   */
  root: TrieNode = new TrieNode()

  /**
   * Inserts a word into the Trie.
   *
   * @param word - The word to insert into the Trie.
   */
  private insertNode(node: TrieNode, word: string): void {
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isWord = true
  }

  /**
   * Searches for a word in the Trie.
   *
   * @param word - The word to search for.
   * @param isPrefixMatch - Indicates whether to perform a prefix match (default: false).
   *   If true, the method returns true if the Trie contains words with the specified prefix.
   *   If false, the method returns true only if an exact match is found.
   * @returns True if the word (or prefix) is found in the Trie; otherwise, false.
   */
  public find(word: string, isPrefixMatch = false): boolean {
    return this.searchNode(this.root, word, isPrefixMatch)
  }

  /**
   * Adds a word to the Trie.
   *
   * @param word - The word to add to the Trie.
   * @returns The Trie instance, allowing for method chaining.
   */
  public add(word: string): this {
    this.insertNode(this.root, word)
    return this
  }

  /**
   * Searches for a word in the Trie.
   *
   * @param node - The current Trie node being examined.
   * @param word - The word to search for.
   * @param prefixMatch - Indicates whether to perform a prefix match.
   * @returns True if the word (or prefix) is found in the Trie; otherwise, false.
   * @private
   */
  private searchNode(
    node: TrieNode,
    word: string,
    prefixMatch: boolean
  ): boolean {
    for (const char of word) {
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return prefixMatch || node.isWord
  }
}
