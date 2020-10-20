/**
 * @param {number[]} A
 * @return {boolean[]}
 */
function prefixesDivBy5(A){
    let res=0;
    return A.map((bit)=>{
        res=res*2+bit;
        res%=5;
        return res==0
    })
}