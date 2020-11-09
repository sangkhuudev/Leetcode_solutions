/**
 * @param {number[]} T
 * @return {number[]}
 */
function dailyTemperatures(T){
    let res= Array(T.length).fill(0);
    let stack=[]
    for(let i=0; i< T.length;i++){
        while(stack.length>0 && T[stack[stack.length-1]] < T[i]){
            let j= stack.pop();
            res[j] = i - j ;
        }
        stack.push(i)
    }
    return res
}
