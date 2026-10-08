class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = new Map()
        for (const number of nums) {
            const value = (hashmap.get(number) || 0) + 1
            hashmap.set(number, value)
        }

        const results = []

        for(const [key, value] of hashmap) {
            if (results[value] === undefined) {
                results[value] = []
            }

            results[value].push(key)
        }

        const output = [];
        for (let i = results.length; i > 0 && output.length < k; i--) {
            if (results[i] !== undefined) {
                output.push(...results[i])
            }
        }

        return output
    }
}