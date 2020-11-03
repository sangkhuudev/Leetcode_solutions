/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function minCostTickets(days,costs){
    let trip=new Set(days)
    let Dp= new Array(366).fill(0);
    for (let i=1;i<366;++i) {
        if(!trip.has(i)){
            Dp[i]=Dp[i-1];
            continue;
        }
        let one = (Dp[i-1]||0) +costs[0];
        let seven =  (Dp[i-7]||0)+costs[1];
        let thirty =  (Dp[i-30]||0)+costs[2];
        Dp[i]=Math.min(one,seven,thirty)
    }
    return Dp[days[days.length-1]]
}
