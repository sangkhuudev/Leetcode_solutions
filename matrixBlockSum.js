/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
function matrixBlockSum(mat,K){
    let Dp= Array(mat.length+1).fill().map(()=>Array(mat[0].length+1).fill(0))
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            Dp[i+1][j+1] = mat[i][j]+ Dp[i+1][j] + Dp[i][j+1] - Dp[i][j]
        }
    }
    for(let i=0;i<mat.length;i++){
        for( let j=0;j<mat[0].length;j++){
            let r1= Math.max(0,i-K);
            let r2= Math.min(mat.length-1,i+K);
            let c1= Math.max(0,j-K);
            let c2= Math.min(mat[0].length-1,j+K);
            mat[i][j] = Dp[r2+1][c2+1] - Dp[r2+1][c1] - Dp[r1][c2+1] + Dp[r1][c1]
        }
    }
    return mat
}
