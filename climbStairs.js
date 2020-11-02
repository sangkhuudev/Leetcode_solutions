/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n){
    let Dp= Array(n+1).fill(0);
    Dp[1] = 1;
    Dp[2] = 2
    for(let i=3;i<=n;i++){
        let val1= Dp[i-1];
        let val2= Dp[i-2];
        Dp[i]= val1+val2
    }
    return Dp[n]
}
