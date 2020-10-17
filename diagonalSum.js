/**
 * @param {number[][]} mat
 * @return {number}
 */
function diagonalSum(mat){
    let sum1=0;
    let sum2=0;
    for(let i=0,j=mat.length-1;i<mat.length&&j>=0;i++,j--){
        sum1+=mat[i][i];
        sum2+=mat[i][j];
    }

    return mat.length%2 !==0 ? sum1+sum2-mat[(mat.length-1)/2][(mat.length-1)/2] : sum1+sum2
}
