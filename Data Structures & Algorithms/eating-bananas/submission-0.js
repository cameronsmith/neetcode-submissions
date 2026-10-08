class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0, right = 9
        for (const num of piles) {
            right = Math.max(right, num)
        }
        let min_eat = right
        while (left <= right) {
            let eat = Math.floor((left + right) / 2)

            let count = 0
            for (const num of piles) {
                count += Math.ceil(num / eat)
            }

            if (count <= h) {
                min_eat = Math.min(eat, min_eat)
                right = eat - 1
            } else {
                left = eat + 1
            }
        }

        return min_eat
    }
}
