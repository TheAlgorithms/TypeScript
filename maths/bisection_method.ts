/**
 * @function bisectionMethod 
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

export const bisectionMethod = (a: number, b: number, e: number, f: Function): number => {
    let c = a
    while ((b - a) >= e) {
        c = (a + b) / 2
        if (f(c) === 0.0) {
            break
        } else if (f(c) * f(a) < 0) {
            b = c
        } else {
            a = c
        }
    }
    return c
}