/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles,numExchange){
    let total=numBottles
    let res=numBottles
    while(total>=numExchange){
        let remainder= total%numExchange;
        let quotient=Math.floor(total/numExchange)
        res+=quotient
        total=quotient+remainder
    }
    return res
}
