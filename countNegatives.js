/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid){
    let row=grid.length;
    let column=grid[0].length;
    let count=0;
    for(let i=0;i<row;i++){
       for(let j=column-1;j>=0;j--){
           if(grid[i][j]<0) count++;
           else break
       }
    }
    return count
}
