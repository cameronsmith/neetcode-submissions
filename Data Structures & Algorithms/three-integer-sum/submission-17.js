class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) {
            return []
        }
        const result = []
        nums.sort((a, b) => a - b)

        let s_offset = 0, l_offset = 1, r_offset = nums.length - 1

        while (s_offset < nums.length - 2) {
            if (s_offset > 0 && nums[s_offset] === nums[s_offset - 1]) {
                s_offset++
                l_offset = s_offset + 1
                continue
            }

            while (l_offset < r_offset) {
                const sum = nums[s_offset] + nums[l_offset] + nums[r_offset]
                if (sum === 0) {
                    result.push([nums[s_offset], nums[l_offset], nums[r_offset]])
                    l_offset++
                    
                    while (nums[l_offset - 1] === nums[l_offset] && l_offset < r_offset) {
                        l_offset++
                    }
                } else if (sum < 0) {
                    l_offset++
                } else {
                    r_offset--
                }
            }

            s_offset++
            l_offset = s_offset + 1
            r_offset = nums.length - 1
        }

        return result
    }
}
