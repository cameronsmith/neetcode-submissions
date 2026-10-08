class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }

        const set = new Set()
        for (const num of nums) {
            set.add(num)
        }

        let max = 1
        for (const num of set) {
            let count = 1
            let start_number = num - 1
            if (set.has(start_number)) {
                continue
            }
                
            let need = num + 1
            while (set.has(need)) {
                count++
                need++
                max = Math.max(max, count)
            }
        }

        return max
    }
}
