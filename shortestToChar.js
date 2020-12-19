function shortestToChar(S , C) {
    let index = [];
    let res = []
    for(let i =0 ; i< S.length;++i) {
        if( S[i] == C) index.push(i)
    }
    for(let j=0;j<S.length;++j){
        let i = 0;
        let minDistance = Infinity;
        while( i< index.length){
            if(Math.abs(index[i] - j) < minDistance) minDistance = Math.abs(index[i] - j);
            i++
        }
        res.push(minDistance)
    }
    return res
}
l