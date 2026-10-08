class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashmap = new Set()
        for (const num of nums) {
            if (hashmap.has(num)) {
                return true
            }
            hashmap.add(num)
        }
        return false
    }
}
