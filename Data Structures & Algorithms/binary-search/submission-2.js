class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1, mid = 0

        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            const value = nums[mid]
            if (value === target) {
                return mid
            } else if (value > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return -1
    }
}
