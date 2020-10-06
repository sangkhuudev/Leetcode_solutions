function sqrt(x){
    let low=0;
    let high=x;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(mid**2==x) return mid;
        else if( mid**2<x) low=mid+1;
        else high=mid-1;
    }

    return high

}
console.log(sqrt(600))