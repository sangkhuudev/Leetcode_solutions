function findRestaurant(list1, list2) {
    let result = [];
    let minSum = +Infinity;
    let hash1 = new Map();
    for (let i = 0; i < list1.length; i++) {
        hash1.set(list1[i],i)
    }
    for (let i = 0; i < list2.length; i++) {
        if(hash1.has(list2[i])) {
            let tempSum = hash1.get(list2[i]) + i;
            if(tempSum < minSum) {
                minSum = tempSum;
                result = [list2[i]]
            } else if(tempSum == minSum) {
                result.push(list2[i]);
            }
        }
        
    }
    return result;
}

const list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"] ;


console.log(findRestaurant(list1, list2));