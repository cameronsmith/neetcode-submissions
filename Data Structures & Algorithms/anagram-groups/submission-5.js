class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        for (const s of strs) {
            const word = new Array(26).fill(0)
            for (const c of s) {
                const char = c.charCodeAt(0) - 97
                word[char] = (word[char] ?? 0) + 1
            }
            const index = word.join(',')
            if (!result[index]) {
                result[index] = []
            }
            result[index].push(s)
        }

        return Object.values(result)
    }
}
