function isUgly(n) {
    if( n == 0 ) return false;
    for(let prime of [2,3,5]) {
        let i = 1;
        while( n % prime**i == 0 ) i++;
        n /= prime**(i-1)
    }
    return n == 1;
}