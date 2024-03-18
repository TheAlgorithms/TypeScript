import { LinkedList } from '../linked_list'

type LinkedListConstructor = new <T>() => LinkedList<T>

export function testLinkedList(LinkedList: LinkedListConstructor) {
  describe('with filled list (push)', () => {
    let list: LinkedList<number> = new LinkedList<number>()

    beforeEach(() => {
      list = new LinkedList<number>()
      list.push(1)
      list.push(2)
      list.push(3)
    })

    it('should return false for isEmpty when list is not empty', () => {
      expect(list.isEmpty()).toBeFalsy()
    })

    it('should return correct node for get', () => {
      expect(list.get(1)).toBe(2)
    })

    it('should push nodes to the list and return correct head and tail', () => {
      expect(list.get(0)).toBe(3)
      expect(list.get(2)).toBe(1)
    })

    it('should pop nodes from the list and return correct head and tail', () => {
      expect(list.pop()).toBe(3)
      expect(list.get(0)).toBe(2)
      expect(list.get(1)).toBe(1)
    })
  })

  describe('with filled list (append)', () => {
    let list: LinkedList<number> = new LinkedList<number>()

    beforeEach(() => {
      list = new LinkedList<number>()
      list.append(1)
      list.append(2)
      list.append(3)
    })

    it('should append nodes to the list and return correct head and tail', () => {
      expect(list.get(0)).toBe(1)
      expect(list.get(2)).toBe(3)
    })

    it('should remove tail from the list and return correct head and tail', () => {
      expect(list.removeTail()).toBe(3)
      expect(list.get(0)).toBe(1)
      expect(list.get(1)).toBe(2)
    })

    it('should insert nodes at the correct index', () => {
      list.insertAt(1, 4)

      expect(list.get(1)).toBe(4)
    })

    it('should remove nodes at the correct index', () => {
      expect(list.removeAt(1)).toBe(2)
    })

    it('should return null for removeAt when index is out of bounds', () => {
      expect(() => list.removeAt(3)).toThrowError('Index out of bounds')
    })

    it('should clear the list', () => {
      list.clear()

      expect(list.isEmpty()).toBeTruthy()
    })

    it('should convert the list to an array', () => {
      expect(list.toArray()).toEqual([1, 2, 3])
    })

    it('should return correct length', () => {
      expect(list.getLength()).toBe(3)
    })
  })

  describe('with empty list', () => {
    let list: LinkedList<number>

    beforeEach(() => {
      list = new LinkedList<number>()
    })

    it('should return true for isEmpty when list is empty', () => {
      expect(list.isEmpty()).toBeTruthy()
    })

    it('should return null for get when index is out of bounds', () => {
      expect(list.get(1)).toBeNull()
    })

    it('should throw error for pop when list is empty', () => {
      expect(() => list.pop()).toThrowError('Index out of bounds')
    })

    it('should return null for removeTail when list is empty', () => {
      expect(() => list.removeTail()).toThrowError('Index out of bounds')
    })
  })
}
