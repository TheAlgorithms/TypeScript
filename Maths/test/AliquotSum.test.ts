import { AliquotSum } from "../AliquotSum";

test.each([[15, 9], [18, 21], [28, 28], [100, 117], [169, 14], [1729, 511], [15625, 3906]])("Aliquot Sum of %i is %i", (num, expected) => {
  expect(AliquotSum(num)).toBe(expected)
})