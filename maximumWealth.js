/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth( accounts ) {
    let richest = 0 ;
    for(let i = 0; i<accounts.length;i++){
        let sum = accounts[i].reduce((acc,val) => acc+val,0);
        if(sum > richest) richest = sum;
    }
    return richest
}
