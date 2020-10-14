/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num){
    const str=num .toString();
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==6){
            break
        }
    }
    return str.replace(6,9);
}
