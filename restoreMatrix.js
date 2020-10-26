/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
function restoreMatrix(rowSum,colSum){
     let matrix=new Array(rowSum.length).fill(0).map(row=> new Array(colSum.length).fill(0))
     for(let i=0;i<rowSum.length;i++){
         for(let j=0;j<colSum.length;j++){
             matrix[i][j]=Math.min(rowSum[i],colSum[j]);
             rowSum[i]-=matrix[i][j];
             colSum[j]-=matrix[i][j]
         }
     }
     return matrix
}
