import { areCoprime } from "../are_coprime";

describe('areCoprime', ()=> {
    it('should return false when numbers are not coprime', () => {
        const value = areCoprime(2,4)
        expect(value).toBe(false)
    })

    it('should return true when numbers are  coprime', () => {
        const value = areCoprime(2,3)
        expect(value).toBe(true)
    })
})