
function selfDividingNumbers(left , right) {
    let res = []
    for(let i=left; i<=right; ++i) {
        let denom = 1;
        let num = i;
        let isSelfNum = true ;
        while ( num >0 && isSelfNum){
            let digit = Math.floor( i/denom) % 10;
            isSelfNum = i % digit ==0  && digit !=0 ;
            num = Math.floor(num / 10);
            denom *=10 
        }
        if(isSelfNum) res.push(i)
    } 
    return res
}
