/**
 * @param {number[][]} grid
 * @return {number}
 */
let grid = [[4,3,-5,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(grid.length)
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
console.log(countNegatives(grid))