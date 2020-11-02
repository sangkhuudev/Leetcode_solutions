/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices){
    let max=0;
    let min= Infinity ;
    for(let i=0;i<prices.length;i++){
        min = Math.min(min,prices[i]);
        max = Math.max(max,prices[i]-min)
    }
    return max
}
