class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1
        while (l < r) {
            const value = numbers[r] + numbers[l]
            if (value === target) {
                return [l + 1, r + 1]
            } else if (value > target) {
                r--
            } else {
                l++
            }
        }

        return []
    }
}
