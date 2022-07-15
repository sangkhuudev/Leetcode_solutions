function sortArray(nums) {
    if(nums.length <=1) return nums
    const partition = (nums,left,right) => {
        let pivot = nums[Math.floor((left + right)/2)];
        while(left <= right) {
            while(nums[left] < pivot) left++;
            while(nums[right] > pivot) right--;
            if(left <= right) {
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
                right--;
            }
    
        }
        return left;
    }
    const quickSort = (nums,start,end) => {
        var index;
        if(nums.length > 1) {
            index = partition(nums,start,end);
            if(start < index - 1) quickSort(nums,start,index - 1);
            if(index < end) quickSort(nums,index,end);
        return nums
        }
    }
    return quickSort(nums,0,nums.length-1)
}

