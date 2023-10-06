import { matrixMultiplication } from "../matrix_multiplication";

describe("MatrixMultiplication", () => {
    it("should return the expected result", () => {
        const matrixA = [[5, 6, 7], 
                         [1, 2, 3]];
        
        const matrixB = [[0, 2], 
                         [1, 3], 
                         [4, 5]];
        
        const expectedResult = [[34, 63], 
                                [14, 23]];

        expect(matrixMultiplication(matrixA, matrixB)).toBe(expectedResult);
    })

    it("should throw error for row sizes", () => {
        const matrixA = [[5, 6], 
                         [1, 2, 3]];
        
        const matrixB = [[0, 2], 
                         [1, 3], 
                         [4, 5]];
        
        expect(matrixMultiplication(matrixA, matrixB)).toThrow();
    })

    it("should throw error for row sizes", () => {
        const matrixA = [[5, 6, 7], 
                         [1, 2, 3]];
        
        const matrixB = [[0, 2], 
                         [1], 
                         [4, 5]];
        
        expect(matrixMultiplication(matrixA, matrixB)).toThrow();
    })

    it("should throw error for different number of matrixA columns and matrixB rows", () => {
        const matrixA = [[5, 6, 7], 
                         [1, 2, 3]];
        
        const matrixB = [[0], 
                         [1], 
                         [4]];
        
        expect(matrixMultiplication(matrixA, matrixB)).toThrow();
    })
});
