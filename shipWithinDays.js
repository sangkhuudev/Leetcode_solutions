/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
function shipWithinDays(weights , D){
    const canShip = capacity =>{
        let used = 0 ; days = 1;
        for(let i=0; i<weights.length;++i){
            used+= weights[i] ;
            if(used > capacity){
                used = weights[i] ;
                days++ ;
            }
            if(days > D) break;
        }
        return days <= D ;
    }
    let low = Math.max(...weights);
    let high = weights.reduce((acc,val)=>acc+val,0) ;
    while( low < high) {
        let mid = Math.floor((low+high)/2) ;
        let capacity = canShip(mid) ;
        if(capacity) high = mid;
        else low = mid+1
    }
    return low
    
}
