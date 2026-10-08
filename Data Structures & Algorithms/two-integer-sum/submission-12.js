class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = new Map()
        for (const [index, value] of nums.entries()) {
            // 7 - 14
            // 7 - 2
            const need_num = target - value
            if (hashmap.has(need_num)) {
                return [index, hashmap.get(need_num)]
            }
            hashmap.set(value, index)
        }
    
        return [0 ,1]
    }
}
