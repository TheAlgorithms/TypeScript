import { uglyNumbers } from '../ugly_numbers'

test('Ugly Numbers', () => {
  const uglyNums = uglyNumbers()
  expect(
    Array(11)
      .fill(undefined)
      .map(() => uglyNums.next().value)
  ).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15])
})
