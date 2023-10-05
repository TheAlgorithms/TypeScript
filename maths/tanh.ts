/**
 * @function TanH
 * @description Returns the hyperbolic tangent of a number
 * @summary The hyperbolic tangent (TanH) function is a mathematical function
 * that returns the hyperbolic tangent of the provided real number.
 * TanH is defined as (e^x - e^(-x)) / (e^x + e^(-x)), where 'x' is the input.
 * @param {number} x - The input number
 * @returns {number} The hyperbolic tangent of 'x'
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent)
 * @example TanH(0) = 0
 * @example TanH(1) = 0.7615941559557649
 * @example TanH(-1) = -0.7615941559557649
 */
export const TanH = (x: number): number => {
    return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x))
}
