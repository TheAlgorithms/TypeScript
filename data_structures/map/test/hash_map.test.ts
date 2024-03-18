import { HashMap } from '../../map/hash_map'

describe('Hash Map', () => {
  let hashMap: HashMap<string, number>
  beforeEach(() => {
    hashMap = new HashMap()
  })

  it('should set a value', () => {
    hashMap.set('a', 1)

    expect(hashMap.values()).toEqual([1])
  })

  it('should override a value', () => {
    hashMap.set('a', 1)
    hashMap.set('a', 2)

    expect(hashMap.values()).toEqual([2])
  })

  it('should get a value', () => {
    hashMap.set('a', 1)

    expect(hashMap.get('a')).toBe(1)
  })

  it('should get null if key does not exist', () => {
    expect(hashMap.get('a')).toBeNull()
  })

  it('should delete a value', () => {
    hashMap.set('a', 1)
    hashMap.delete('a')

    expect(hashMap.get('a')).toBeNull()
  })

  it('should do nothing on delete if key does not exist', () => {
    hashMap.delete('a')

    expect(hashMap.get('a')).toBeNull()
  })

  it('should return true if key exists', () => {
    hashMap.set('a', 1)

    expect(hashMap.has('a')).toBe(true)
  })

  it('should return false if key does not exist', () => {
    expect(hashMap.has('a')).toBe(false)
  })

  it('should clear the hash table', () => {
    hashMap.set('a', 1)
    hashMap.set('b', 2)
    hashMap.set('c', 3)
    hashMap.clear()

    expect(hashMap.getSize()).toBe(0)
  })

  it('should return all keys', () => {
    hashMap.set('a', 1)
    hashMap.set('b', 2)
    hashMap.set('c', 3)

    expect(hashMap.keys()).toEqual(['a', 'b', 'c'])
  })

  it('should return all values', () => {
    hashMap.set('a', 1)
    hashMap.set('b', 2)
    hashMap.set('c', 3)

    expect(hashMap.values()).toEqual([1, 2, 3])
  })

  it('should return all key-value pairs', () => {
    hashMap.set('a', 1)
    hashMap.set('b', 2)
    hashMap.set('c', 3)

    expect(hashMap.entries()).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 }
    ])
  })

  it('should keep entries when trigger resize', () => {
    hashMap.set('a', 1)
    hashMap.set('b', 2)
    hashMap.set('c', 3)
    hashMap.set('d', 4)
    hashMap.set('e', 5)
    hashMap.set('f', 6)
    hashMap.set('g', 7)
    hashMap.set('h', 8)
    hashMap.set('i', 9)
    hashMap.set('j', 10)
    hashMap.set('k', 11)
    hashMap.set('l', 12)
    hashMap.set('m', 13)
    hashMap.set('n', 14)
    expect(hashMap.getSize()).toBe(14)
  })
})
