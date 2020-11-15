/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num){
    let count = 0;
    while (num !=0){
        num = num%2 ==0 ? num >>1 : num -1;
        count++;
    }
    return count 
}