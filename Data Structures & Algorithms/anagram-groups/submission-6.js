class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = []
        for (const str of strs) {
            const anagram = new Array(26).fill(0)
            for (const c of str) {
                const index = c.charCodeAt(0) - 97
                anagram[index] = anagram[index] + 1
            }
            
            const index = anagram.join(',')
            if (!result[index]) {
                result[index] = []
            }
            result[index].push(str)
        }

        return Object.values(result)
    }
}
