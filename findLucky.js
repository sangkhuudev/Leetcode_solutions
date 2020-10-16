/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr){
    let hashmap=new Map();
    for(let item of arr) {
      // hashmap.has(item) ? hashmap.set(item,hashmap.get(item)+1):hashmap.set(item,1)
       hashmap.set(item,1+(hashmap.get(item)||0));
    }
    return Math.max(...arr.filter(key=>hashmap.get(key)==key),-1)  
}
