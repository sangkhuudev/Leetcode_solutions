/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s){
    return (depth => 
        [...s].reduce((acc,current)=>{
            if('('== current) depth++;
            else if (current == ')') depth--;
            return Math.max(acc,depth)
        },0)) (0)   
}
let s = "(1+(2*3)+((8)/4))+1" ;
console.log(maxDepth(s))