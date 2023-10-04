import { UglyNumbers } from '../ugly_numbers';

test('Ugly Numbers', () => {
  const uglyNumbers = UglyNumbers();
  expect(Array(11).fill(undefined).map(() => uglyNumbers.next())).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15]);
})
