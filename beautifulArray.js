/**
 * @param {number} N
 * @return {number[]}
 */
function beautifulArray(N){
    let res=[1];
    while(res.length<N){
        let odd=[], even=[];
    for(let i of res){
        if(2*i-1<=N) odd.push(2*i-1)
    }
    for(let i of res){
        if(2*i<=N) even.push(2*i)
    }
    res=[...odd,...even]
    }
return res
}

