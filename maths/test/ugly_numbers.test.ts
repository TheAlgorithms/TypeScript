import { UglyNumbers } from '../ugly_numbers';

test.each([[1, 1], [7, 8], [11, 15]])('Ugly Numbers', (number: number, result: number) => {
  expect(UglyNumbers(number)).toBe(result)
})