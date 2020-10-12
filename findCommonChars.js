/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A){
    let res=[...A[0]];
    for(let i=1;i<A.length;i++){
        res=res.filter(c=>{
            const length=A[i].length;
            A[i]=A[i].replace(c,"");
            return length>A[i].length
        })
    }
    return res
}
