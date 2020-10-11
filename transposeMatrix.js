/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const a=[[1,2,3],[4,5,6],[7,8,9]];// [[1,4,7],[2,5,8],[3,6,9]]
function transpose(A){
    let matrix=[]
    let i=-1;
    while(++i<A[0].length){
        if(!matrix[i]) matrix[i]=[];
        let j=-1;
        while(++j<A.length){
            matrix[i][j]=A[j][i]
        }
    }
    return matrix
}
console.log(transpose(a))