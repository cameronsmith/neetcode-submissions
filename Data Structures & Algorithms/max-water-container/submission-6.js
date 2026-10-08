class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length === 0) {
            return 0
        }

        let left = 0, right = heights.length - 1
        let max = 0
        while (left < right) {
            const min_height = Math.min(heights[left], heights[right])
            const sum = right - left
            max = Math.max(min_height * sum, max)

            if (heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }

        return max

    }
}
