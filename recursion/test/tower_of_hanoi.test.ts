import { TowerOfHanoi } from "../tower_of_hanoi";

describe('TowerOfHanoi Function', () => {
  it('should solve Tower of Hanoi for 1 disk', () => {
    const result = TowerOfHanoi(1, 'A', 'C', 'B');
    const expected = ['Move disk 1 from rod A to rod C'];
    expect(result).toEqual(expected);
  });

  it('should solve Tower of Hanoi for 2 disks', () => {
    const result = TowerOfHanoi(2, 'A', 'C', 'B');
    const expected = [
      'Move disk 1 from rod A to rod B',
      'Move disk 2 from rod A to rod C',
      'Move disk 1 from rod B to rod C',
    ];
    expect(result).toEqual(expected);
  });

  it('should solve Tower of Hanoi for 3 disks', () => {
    const result = TowerOfHanoi(3, 'A', 'C', 'B');
    const expected = [
      'Move disk 1 from rod A to rod C',
      'Move disk 2 from rod A to rod B',
      'Move disk 1 from rod C to rod B',
      'Move disk 3 from rod A to rod C',
      'Move disk 1 from rod B to rod A',
      'Move disk 2 from rod B to rod C',
      'Move disk 1 from rod A to rod C',
    ];
    expect(result).toEqual(expected);
  });
});
