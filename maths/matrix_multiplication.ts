/**
 * @function matrixMultiplication
 * @description This function will multiply two matrices.
 * @param {number[][]} matrixA First matrix of the operation.
 * @param {number[][]} matrixB Second matrix of the operation.
 * @return {number[][]} The result of the multiplication.
 * @see https://en.wikipedia.org/wiki/Median
 * @example matrixMultiplication([[5, 6, 7], [1, 2, 3]], [[0, 2], [1, 3], [4, 5]]) = [[34, 63], [14, 23]]
 */
export const matrixMultiplication = (matrixA:number[][],matrixB:number[][])=>{
    const matrixARowsSameSize = matrixA.every((row,index)=>index !== 0 ? row.length === matrixA[index - 1].length : true);
    const matrixBRowsSameSize = matrixB.every((row,index)=>index !== 0 ? row.length === matrixB[index - 1].length : true);
    const matrixAColumnAmount = matrixA[0].length;
    const matrixBRowAmount = matrixB.length;
    if(!matrixARowsSameSize || !matrixBRowsSameSize){
        throw "The size of a matrix's rows should be all the same.";
    }
    if(matrixAColumnAmount !== matrixBRowAmount){
        throw "Matrix A should have the same amount of columns as Matrix B rows";
    }
    return matrixA.map((row)=>{
        return matrixB[0].map((value, columnIndex)=>{
            let result = 0;
            for(let i=0;i<matrixBRowAmount;i++){
                result += row[i]+matrixB[i][columnIndex];
            }
            return result;
        })
    })
}
