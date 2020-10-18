/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n,m,indices){
    let rows=  Array(n).fill(false);
    let columns= Array(m).fill(false);
    indices.forEach(([x,y])=>{
        rows[x]= !rows[x];
        columns[y]=!columns[y];
    });
    let numRows=rows.reduce((acc,current)=> current? acc+1 : acc,0);
    let numColumns=columns.reduce((acc,current)=> current? acc+1 : acc,0)
    return numRows*m+numColumns*n-2*numColumns*numRows
}
// ver 2:
function  oddCells2(n,m,indices){
    let oddNums=0;
    let matrix=[...Array(n)].map(()=>Array(m).fill(0));
    for(let [r,c] of indices){
        for(let i=0;i<n;i++)  ++matrix[i][c];
        for(let j=0;j<m;j++)  ++ matrix[r][j];
    }
    for(let row of matrix){
        oddNums+=[...row].filter((x)=> x%2==1).length;
    }
    return  oddNums
}