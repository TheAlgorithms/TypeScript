/**
 * @description Bisection method is a root-finding method that applies to any continuous function for which one knows two values with opposite signs.
 * @param  {number} a - The first value
 * @param  {number} b - The second value
 * @param  {number} e - The error value
 * @param  {Function} f - The function
 * @return {number} - The root of the function
 * @see [BisectionMethod](https://en.wikipedia.org/wiki/Bisection_method)
 * @example bisectionMethod(1, 2, 0.01, (x) => x**2 - 2) = 1.4140625
 * @example bisectionMethod(1, 2, 0.01, (x) => x**2 - 3) = 1.732421875
 */

export const bisectionMethod = (
  a: number,
  b: number,
  e: number,
  f: Function
): number => {
  if (e <= 0) {
    throw new Error('Error threshold must be positive')
  }

  if (f(a) * f(b) >= 0) {
    throw new Error('f(a) and f(b) should have opposite signs')
  }

  let c = a
  while (Math.abs(b - a) / 2 >= e) {
    c = (a + b) / 2
    if (Math.abs(f(c)) < 1e-9) {
      break
    } else if (f(c) * f(a) < 0) {
      b = c
    } else {
      a = c
    }
  }
  return c
}
