/**
 * @function areCoprime
 * @description Checks if two given numbers are co-prime or not
 * @param {a} number - a numeric input value
 * @param {a} number - a numeric input value
 * @example areCoprime(2,4) = false
 * @example areCoprime(2,3) = true
 */

import { greatestCommonFactor } from "./greatest_common_factor"

export const areCoprime = (a: number, b: number): boolean =>{

    if(greatestCommonFactor([a,b]) === 1){
        return true;
    }
    return false;
}