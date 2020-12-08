/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
    let res =[];
    for(let i=0;i<prices.length;i++){
        let j = i+1 ;
        if(i== prices.length - 1) {
            res[i] = prices[i];
            break;
        }    
        while(j<prices.length){
            if(prices[i]< prices [j] ){
                res[i] = prices[i]
                j++
            } 
            else {
                res[i] = prices[i] - prices[j]
                break
            }    
        }
    }
    return res
}
