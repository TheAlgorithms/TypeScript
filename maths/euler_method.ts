/**
 * @description Euler's method is a first-order numerical procedure for solving ordinary differential equations (ODEs) with a given initial value.
 * @param {number} x0 - The initial value of x
 * @param {number} y0 - The initial value of y
 * @param {number} h - The step size
 * @param {number} n - The number of iterations
 * @param {Function} f - The function
 * @return {number} - The value of y at x
 * @see [EulerMethod](https://en.wikipedia.org/wiki/Euler_method)
 * @example eulerMethod(0, 1, 0.1, 10, (x, y) => x + y) = 2.5937424601
 * @example eulerMethod(0, 1, 0.1, 10, (x, y) => x * y) = 1.7715614317
 */

export const eulerMethod = (x0: number, y0: number, h: number, n: number, f: Function): number => {

    if (typeof f !== 'function') { 
        throw new Error('f must be a function')
    }

    if (n < 0) {
        throw new Error('Number of iterations must be non-negative')
    }

    let x = x0
    let y = y0

    for (let i = 1; i <= n; i++) {
        y = y + h * f(x, y)
        x = x + h
    }

    return y
}