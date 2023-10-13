/**
 * This code checks if a number is even
 * @author vcnovaes<https://github.com/vcnovaes>
 * @explanation
    If a number is even the last bit is 0, so
    if you do  n & 1, if is odd the result will be one, else it will be 0
    Eg.: 
        10000 
        00001
        -----
        00000 

        10001
        00001
        -----
        00001
 * @param {number}
 * @returns {boolean}
 */
export const isEven = (n: number): boolean => (n & 1) == 0;
