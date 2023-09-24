/**
 * Trie Data structure implementation in typescript
 * 
 * It is a methodology of inserting word/string in O(n) time complexity where, n represents length of word
 * 
 */
export class Trie {
  map: { [key: string]: Trie } = {};
  isWord: boolean = false;

  constructor() {}

  /**
   * 
   * @param word 
   * @param position 
   * @param letterMap 
   * @returns 
   * 
   * Recursive private method implementation to insert word in letterMap of type (Trie)
   * 
   * We consume this in our public method
   */
  private insert(word: string, position: number, letterMap: Trie): void {
    if (position === word.length) {
      letterMap.isWord = true;
      return;
    }

    if (!letterMap.map[word.charAt(position)]) {
      letterMap.map[word.charAt(position)] = new Trie();
    }
    return this.insert(
      word,
      position + 1,
      letterMap.map[word.charAt(position)]
    );
  }

  /**
   * 
   * @param word 
   * @param position 
   * @param letterMap 
   * @returns 
   * 
   * Recursive private method implementation to search word in letterMap of type (Trie)
   * We consume this in our public method
   */

  private search(word: string, position: number, letterMap: Trie, prefixMatch: boolean): boolean {
    if (position === word.length) {
      if (prefixMatch || letterMap.isWord) {
        return true;
      }
      return false;
    }

    if (letterMap.map[word.charAt(position)]) {
      return this.search(
        word,
        position + 1,
        letterMap.map[word.charAt(position)],
        prefixMatch
      );
    }

    return false;
  }

  /**
   * 
   * @param word 
   * Method to add word in Trie 
   */
  public add(word: string): void {
    this.insert(word, 0, this);
  }

  /**
   * 
   * @param word 
   * @returns 
   * Method to find/search word inside letterMap which is of type Trie
   */
  public find(word: string, isPrefixMatch: boolean = false): boolean {
    return this.search(word, 0, this, isPrefixMatch);
  }
}
