/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n){
    if(n==2) return 1
    if(n==3) return 2
    if(n==4) return 4
    const partition = (num) =>{
        let res=[];
        let temp=[];
        if(num == 3){
            return [3]
        }
        else if(num == 2){
            return [2]
        }
        else if(num==4){
            return [4]
        }
        else{
            res.push(3);
            temp= partition(num-3);
        }
        return [...res,...temp]
    }
    let arr= partition(n);
    return arr.reduce((acc,val)=>acc*val,1)
}
