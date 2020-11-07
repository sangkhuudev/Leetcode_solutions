/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    return this.array.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.array.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let n=this.array.length-1;
    let min= Infinity
    while(n>=0){
        if(this.array[n]<min) min = this.array[n];
        n--
    }
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */