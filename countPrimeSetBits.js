/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
// ver 1
function countPrimeSetBits( L, R){
    const  countOne = num =>{
        let count=0;
        while (num != 0){
            num = num & (num-1);
            count++
        }
        return count
    }
    const isPrime = num =>{
        if(num<=1) return false;
        else if(num==2 || num ==3) return true;
        else if(num%2 == 0 || num%3 == 0) return false;
        else{
            let i=5;
            while(i**2<=num){
                if(num%i == 0 || num%(i+2) == 0) return false;
                i+=6
            }
        }
        return true
    }
    let res = 0;
    for(let i=L;i<=R;i++){
        if(isPrime(countOne(i))) res++
    }
    return res
}
console.log(countPrimeSetBits2(10,15))
// ver 2:
function countPrimeSetBits2(L,R){
    let res =0;
    const  countOne = num =>{
        let count=0;
        while (num != 0){
            num = num & (num-1);
            count++
        }
        return count
    }
    let primes = new Set([2,3,5,7,11,13,17,19])
    for(let i=L;i<=R;++i){
        if(primes.has(countOne(i))) res++
    }
    return  res
}