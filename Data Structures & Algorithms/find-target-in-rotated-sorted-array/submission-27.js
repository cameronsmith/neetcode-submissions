class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] > nums[right]) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        const pivot = left
        if (nums[pivot] === target) {
            return pivot
        }

        console.log(pivot)
        
        if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
            // target is on the right side
            console.log('here1')
            left = pivot
            right = nums.length - 1
            while (left <= right) {
                const mid = Math.floor((left + right) / 2)
                if (nums[mid] === target) {
                    return mid
                }

                if (nums[mid] > target) {
                    right = mid - 1
                } else {

                    left = mid + 1
                }
            }
        } else {
            // target is on the left side
            console.log('here2')
            left = 0
            right = pivot
            while (left <= right) {
                const mid = Math.floor((left + right) / 2)
                if (nums[mid] === target) {
                    return mid
                }
                if (nums[mid] > target) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }

        return -1
    }
}
