import { ArmstrongNumber } from "../ArmstrongNumber"

describe('ArmstrongNumber', () => {
	it('should return the correct value', () => {
		expect(ArmstrongNumber(9)).toBe(true)
	})
	it('should return the correct value', () => {
		expect(ArmstrongNumber(-310)).toBe(false)
	})
	it('should return the correct value', () => {
		expect(ArmstrongNumber(407)).toBe(true)
	})
	it('should return the correct value', () => {
		expect(ArmstrongNumber(420)).toBe(false)
	})
	it('should return the correct value', () => {
		expect(ArmstrongNumber(0)).toBe(false)
	})

	it('should return the correct value', () => {
		expect(ArmstrongNumber(13579)).toBe(false)
	})

	it('should return the correct value', () => {
		expect(ArmstrongNumber(92727)).toBe(true)
	})
})