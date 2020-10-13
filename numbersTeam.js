/**
 * @param {number[]} rating
 * @return {number}
 */
// ver 1
function numTeams(rating){
    if(rating.length<3) return 0;
    let res=0;  
    for(let i=0;i<rating.length;i++){
        for(let j=i+1;j<rating.length;j++){
            if(rating[j]>rating[i]){
                const arr=rating.slice(j+1).filter(element=>element>rating[j])
                res=res+arr.length
            }
            else if(rating[j]<rating[i]){
                    const arr=rating.slice(j+1).filter(element=>element<rating[j])
                    res=res+arr.length
            }
        
        }
    }
    return res
}

// ver 2: using DP
function numTeams2(rating){
if(rating.length < 3) return 0;
    let result = 0;

    let greaterThan = new Array(rating.length).fill(0);
    let lessThan = new Array(rating.length).fill(0);

    for(let i = 0; i < rating.length; i++) {
        for(let j = i + 1; j < rating.length; j++) {
            if(rating[j] > rating[i]) {
                ++greaterThan[i];
            } else if(rating[j] < rating[i]) {
                ++lessThan[i];
            }
        }
    }
        
    for(let i = 0; i < rating.length - 2; i++) {
        for(let j = i + 1; j < rating.length; j++) {
            if(rating[j] > rating[i]) {
                result += greaterThan[j];
            } else if(rating[j] < rating[i]) {
                result += lessThan[j];
            }
        }
    }
    return result;   
}     
