// version 1
function findMajorElement(a){
    let count=1;
    let candidate=a[0];
    let objRes={};
    for(let i=1;i<a.length;i++){
        if(a[i]==candidate){
            count=count+1;
        }
        else if(count==0){
            candidate=a[i];
            count=1;
        }
        else{
            count=count-1;
        }
    }
    if(count>0){
        objRes=getCountForValue(a,candidate)
        count=objRes.num;
    }
    if(count>0){
        return objRes.cand;
    }
    return 0;
}
function getCountForValue(a,x){
    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==x) count=count+1;
        else count=count-1;
    }
    return {cand: x, num: count}
}

// version 2 of finding major element
function majorElement(arr){
    arr.sort((a,b)=>a-b);
    return arr[Math.floor((arr.length-1)/2)]
}