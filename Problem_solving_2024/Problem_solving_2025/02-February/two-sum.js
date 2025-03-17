var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1 ;j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                return [i,j]
            }
        }
    }
    return []      

};



const twoSum1 = function(nums, target) {
    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const delta = target - num;
        if (hash.has(delta)) { return [hash.get(delta), i]; }
        hash.set(num, i);
    }
    return [];
};