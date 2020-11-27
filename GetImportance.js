/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
function GetImportance( employees , id) {
    let map = new Map() ;
    for(let employee of employees) {
        map.set(employee.id, {importance : employee.importance, subordinates : employee.subordinates})
    }
    let importances = 0;
    let queue = [id];
    while(queue.length > 0){
        let root = map.get(queue.shift());
        importances+=root.importance;
        queue.push(...root.subordinates)
    }
    return importances
}