/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num){
    let bound;
    for(let i=1;i<100;i++){
        if(num<10**i) {
            bound=10**i;
            break
        }
    }
    for(let j=1;j<=bound;j++){
        if(j**2==num) return true;
        else if(j**2<num && num <(j+1)**2) return false
    }    
    return false
}