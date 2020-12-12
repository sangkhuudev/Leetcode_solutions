/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
    let product = 1;
    let sum = 0
    while(n>0){
        digit = n%10;
        n=(n-digit)/10;
        product*= digit ;
        sum+=digit
    }
    return product - sum
}

