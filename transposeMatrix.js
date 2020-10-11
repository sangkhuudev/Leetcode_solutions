/**
 * @param {number[][]} A
 * @return {number[][]}
 */
function transpose(A){
    let matrix=new Array(A[0].length).fill(Array(A.length).fill(0))
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
// ver 2 : using map
function transpose2(A){
    return A[0].map((val,ind)=>A.map(row=>row[ind]))
}
