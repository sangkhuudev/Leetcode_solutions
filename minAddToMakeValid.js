/**
 * @param {string} S
 * @return {number}
 */
function minAddToMakeValid(S){
    let stack=[];
    let count=0;
    for(let i=0;i<S.length;++i){
        if(S[i]=='(') stack.push('(');
        else{
            count+= stack.pop() ? 0 : 1 ;
        }
    }
    return count + stack.length
}
