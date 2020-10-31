/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix){
    let Dp = new Array(matrix.length+1).fill().map(()=>new Array(matrix[0].length+1).fill(0));
    let count=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] == 0) Dp[i+1][j+1]=0;
            else{
                const top  =  Dp[i][j+1];
                const bottom =  Dp[i+1][j];
                const diagonal=  Dp[i][j];
                let value = Math.min(top,bottom,diagonal)+1;
                Dp[i+1][j+1] = value;
                count+=value
            }
        }
    }
    return count
}
