import { greatestCommonFactor } from "./greatest_common_factor"

export const areCoprime = (a: number, b: number): boolean =>{

    if(greatestCommonFactor([a,b]) === 1){
        return true;
    }
    return false;
}