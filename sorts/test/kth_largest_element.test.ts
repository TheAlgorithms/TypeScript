import { kthLargestElement } from "../kth_largest_element";

describe('kthLargestElement', () => {
  it.each([
    [[1, 2, 3, 4, 5], 1, 5],
    [[5, 4, 3, 2, 1], 3, 3],
    [[5, 5, 5, 5, 5], 1, 5],
    [[5, 5, 5, 5, 5], 5, 5],
    [[1, 2, 2, 3, 4, 4, 4, 5], 2, 4],
  ])('returns %i as the %ith largest element in %p', (array, k, expected) => {
    expect(kthLargestElement(array, k)).toBe(expected);
  });

});
