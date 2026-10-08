class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) {
            return []
        }

        // -1, -1,  0, 1, 2, -1, -4
        //      ^   ^             ^

        const result = []
        nums.sort((a, b) => a - b)
        let s = 0, l = 1, r = nums.length - 1
        while (s < r) {
            if (s > 0 && nums[s] === nums[s - 1]) {
                s++
                continue
            }

            l = s + 1
            r = nums.length - 1

            while (l < r) {
                const sum = nums[s] + nums[l] + nums[r]
                if (sum === 0) {
                    result.push([nums[s], nums[l], nums[r]])
                    l++
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++
                    }
                } else if (sum < 0) {
                    l++
                } else {
                    r--
                }
            }
            s++
        }

        return result
    }
}
