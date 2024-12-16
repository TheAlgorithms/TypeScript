/**
 * 
 * @description Find the root of a function within a given interval using the bisection method.
 * @param f The function for which the root is being sought
 * @param a The start of the interval
 * @param b The end of the interval
 * @param tol The tolerance value, determining the precision of the root
 * @param maxIter The maximum number of iterations
 * @returns The approximate root of the function, or null if no root is found
 * @throws Error if f(a) and f(b) do not have opposite signs
 * @throws Error if f is not a function
 * @see https://en.wikipedia.org/wiki/Bisection_method
 * @example bisection(x => x * x - 2, 1, 2) returns Math.sqrt(2)
 * @example bisection(x => x * x * x - 4, 1, 2) returns Math.cbrt(4)
 */
export function bisection(
  f: (x: number) => number,
  a: number,
  b: number,
  tol = 1e-7,
  maxIter = 100
): number | null {
  
  if (typeof f !== 'function') {
    throw new Error("The first argument must be a function.")
  }

  const fa = f(a)
  const fb = f(b)
  
  if (fa * fb >= 0) {
    throw new Error("The function must have opposite signs at the endpoints a and b.")
  }

  let iter = 0
  let left = a
  let right = b
  
  while (iter < maxIter) {
    const mid = (left + right) / 2
    const fMid = f(mid)
    
    if (Math.abs(fMid) < tol) {
      return mid
    }
    
    if (Math.abs(right - left) < tol) {
      return mid
    }
    
    if (fa * fMid < 0) {
      right = mid
    } else {
      left = mid
    }
    
    iter++
  }
  
  return null
}
