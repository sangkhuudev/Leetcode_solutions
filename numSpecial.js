/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat){
    let sumRows=mat.map(row=>row.reduce((acc,val)=>acc+val,0))
    let sumColumns=Array(mat[0].length).fill(0);
    let count=0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            sumColumns[j]+=mat[i][j]
          } 
    }
    console.log(sumColumns)
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(sumRows[i]==1 && sumColumns[j]==1 && mat[i][j]==1) count++
          } 
    }
    
    return count
}
