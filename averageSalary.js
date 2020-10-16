/**
 * @param {number[]} salary
 * @return {number}
 */
function averageSalary(salary){
    let max=Math.max(...salary);
    let min=Math.min(...salary);
    let sum=salary.reduce((acc,item)=>acc+item,0);
    return (sum-min-max)/(salary.length-2)
}
// ver 2: return salary.sort((a,b)=>a-b).slice(1,salary.length-1).reduce((a,b)=>a+b)/(salary.length-2)