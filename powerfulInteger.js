/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
function powerfulInteger(x,y,bound){
    let set=new Set();
    let xMax= x>1 ? Math.floor(Math.log(bound)/Math.log(x)):1;
    let yMax= y>1 ? Math.floor(Math.log(bound)/Math.log(y)):1;
    for(let i=0;i<=xMax;i++){
        for(let j=0;j<=yMax;j++){
            let res=x**i+y**j;
            if(res<=bound) set.add(res)
        }
    }
    return [...set]
}
