import { UglyNumbers } from '../ugly_numbers';

test.each([[1, 1], [7, 8], [11, 15]])('Ugly Numbers', (number: number, result: number) => {
  const uglyNumber = UglyNumbers();

  for(let i = 0; i < (number - 1); i++)
    uglyNumber.next();

  const e = uglyNumber.next().value;
  console.log(e);
  expect(e).toBe(result);
})