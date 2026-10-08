class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) {
            return []
        }

        const left = [1]
        for (let i = 0; i < nums.length; i++) {
            const sum = left[left.length - 1] * nums[i]
            left.push(sum)
        }

        const right = [1]
        for (let i = nums.length - 1; i >= 0; i--) {
            const sum = right[0] * nums[i]
            right.unshift(sum)
        }

        const result = []
        for (let i = 0; i < left.length - 1; i++) {
            const sum = left[i] * right[i + 1]
            result.push(sum)
        }

        return result
    }
}
