class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const row of matrix) {
            if (!(target >= row[0] && target <= row[row.length - 1])) {
                continue
            }

            let left = 0, right = row.length - 1
            while (left <= right) {
                const mid = Math.floor((left + right) / 2)
                const value = row[mid]
                if (value === target) {
                    return true
                } else if (value > target) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
        return false
    }
}
