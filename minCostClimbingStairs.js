/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost){
    let Dp= Array(cost.length)
    Dp[0]=cost[0];
    Dp[1]=cost[1];
    for(let i=2;i<cost.length;i++){
        let oneStep= Dp[i-1]
        let twoStep= Dp[i-2]
        Dp[i]= cost[i] + Math.min(oneStep, twoStep)
    }
    return Math.min(Dp[cost.length-2],Dp[cost.length-1])
}
