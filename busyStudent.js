/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime,endTime,queryTime){
    return startTime.filter((_,i)=>startTime[i]<=queryTime && queryTime<=endTime[i]).length
}
const a=[1,2,3]
const b=[3,2,7]
console.log(busyStudent(a,b,4))