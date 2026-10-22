class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) {
                return mid
            }
            if (nums[left] === target) {
                return left
            }
            if (nums[right] === target) {
                return right
            }

            if (nums[left] < nums[mid]) {
                // left side is sorted
                if (target < nums[mid] && target >= nums[left]) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            } else {
                // right side is sorted
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }

        return -1

    }
}
