import { Trie } from "../tries"; 

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should add and find a single word', () => {
    trie.add('apple');
    expect(trie.find('apple')).toBe(true);
  });

  it('should not find a word that was not added', () => {
    trie.add('apple');
    expect(trie.find('banana')).toBe(false);
  });

  it('should add and find multiple words', () => {
    trie.add('apple');
    trie.add('banana');
    trie.add('cherry');
    expect(trie.find('apple')).toBe(true);
    expect(trie.find('banana')).toBe(true);
    expect(trie.find('cherry')).toBe(true);
  });

  it('should not find a partial word', () => {
    trie.add('apple');
    expect(trie.find('app')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(trie.find('')).toBe(false);
  });

  it('should handle empty trie', () => {
    expect(trie.find('apple')).toBe(false);
  });
});
