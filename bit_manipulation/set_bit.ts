/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @see: https://www.geeksforgeeks.org/set-k-th-bit-given-number/
 * @explanation : 
 * To set any bit we use bitwise OR (|) operator.
 *
 * Bitwise OR (|) compares the bits of the 32
 * bit binary representations of the number and
 * returns a number after comparing each bit.
 *
 * 0 OR 0 -> 0
 * 0 OR 1 -> 1
 * 1 OR 0 -> 1
 * 1 OR 1 -> 1
 *
 * In-order to set kth bit of a number (where k is the position where bit is to be changed)
 * we need to shift 1, k times to its left and then perform bitwise OR operation with the
 * number and result of left shift performed just before.
 * @param {number} n
 * @param {number} positionOfBit
 * @return {number}
 */

export const setBit = (n: number, positionOfBit: number): number => n | (1 << positionOfBit)