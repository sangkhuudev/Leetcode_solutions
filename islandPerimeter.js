/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter( grid ) {
    let perimeter = 0 ;
    for( let i=0;i < grid.length;++i) {
        for( let j = 0;j <grid[0].length;++j) {
            if (grid[i][j]){
                if(!grid[i][j+1]) perimeter++ ;
                if(!grid[i][j-1]) perimeter++;
                if(!grid[i-1] || !grid[i-1][j]) perimeter++;
                if(!grid[i+1] || !grid[i+1][j]) perimeter++;
            }
        }
    }
    return perimeter
}
