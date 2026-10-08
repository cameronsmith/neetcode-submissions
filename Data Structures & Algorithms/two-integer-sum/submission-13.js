class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const need = target - num
            if (map.has(need)) {
                return [i, map.get(need)]
            }
            map.set(num, i)
        }
        return [-1,-1]
    }
}
