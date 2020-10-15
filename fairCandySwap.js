/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function fairCandySwap(A,B){
    let hash=new Map()
    let sumA=A.reduce((acc,val)=>acc+val);
    let sumB=B.reduce((acc,val)=>{
        hash.set(val)
        return acc+val
    },0);   
    for(let item of A) {
        let key=item+(sumB-sumA)/2;
        if(hash.has(key)) return [item,key]
    }
}
