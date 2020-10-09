/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// ver 1
function numJewelsInStones(J,S){
    let hash={};
    for(let i=0;i<J.length;i++){
        hash[J[i]]=1
    }
    for(let j=0;j<S.length;j++){
        hash[S[j]] = ( hash[S[j]] ? ++hash[S[j]] : 0)
    }
    console.log(hash)
    let res=Object.values(hash)
    let sum=0;
    for(let element of res){
        if(element !=0)  sum=sum+element-1
    }
    return sum
}

// ver 2
function numJewelsInStones2(J,S){
    let hash = {};
    let count = 0;
    for(let j in J){
        hash[J[j]] = j
    }
    console.log(hash)
    for(let i in S){
        if(hash[S[i]]){
            count++
        }
    }
    return count
}
// ver 3 : faster algorithm
function numJewelsInStones2(J,S){
const set = new Set(J);
    return S.split('').reduce((count, current) => set.has(current) ? count + 1 : count, 0)
}    