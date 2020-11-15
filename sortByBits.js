/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr){
    const countBits = num =>{
        let count=0;
        while(num!= 0){
            num = num & (num-1);
            count++
        }
        return count 
    }
    return arr.sort((a,b)=>   (countBits(a)-countBits(b)) !=0 ? (countBits(a)-countBits(b)) : a-b)
}
