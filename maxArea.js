function maxArea(height) {
    let [result,left,right] = [0,0,height.length - 1];
    while (left < right) {
        let shortestSide = Math.min(height[left], height[right]);
        let area = shortestSide*(right-left);
        result = Math.max(result, area);
        if(height[left] < height[right]) left++;
        else right--;
    }
    return result;
}
