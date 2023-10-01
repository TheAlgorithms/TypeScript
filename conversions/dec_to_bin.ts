/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @param {number}
 * @returns {string}
 */
export const decimalToBinary = (num: number): string => {
    const bin = []
    while (num > 0) {
      bin.unshift(num % 2)
      num >>= 1 // basically /= 2 without remainder if any
    }
    return bin.join('')
}