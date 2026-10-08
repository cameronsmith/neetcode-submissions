class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [1]
        for (let i = 0; i < nums.length; i++) {
            const product = left[i] * nums[i]
            left.push(product)
        }

        const right = [1]
        for (let i = nums.length - 1; i >= 0; i--) {
            const product = right[0] * nums[i]
            right.unshift(product)
        }

        const result = []
        for (let i = 0; i < left.length - 1; i++) {
            result.push(left[i] * right[i + 1])
        }

        return result
    }
}
