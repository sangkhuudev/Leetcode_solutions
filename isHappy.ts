function isHappy(n : number) {
    let history = new Set(),
        sum;

    while(true) {
        const digit = [];
        while(n) {
            digit.push(n%10);
            n = Math.floor(n/10)
        }
        sum = digit.reduce((acc,val) => acc + val**2,0);
        if( sum == 1) return true;
        if(history.has(sum)) return false;
        history.add(sum);
        n = sum;
    }
}
