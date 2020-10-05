
function removeElement(arr,val){
    let length=arr.length;
    for(let i=0;i<length;i++){
        let index=arr.indexOf(val);
        if(index>-1){
            arr.splice(index,1)
        }
    }

    return arr
}
function removeElement2(nums,val){
    let i = 0;
    for (let element of nums) {
        if (element != val) {
            nums[i] = element;
            i++;
        }
    }
    return i;
}
