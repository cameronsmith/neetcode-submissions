class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const words = []
        for (const word of strs) {
            const key = word.split('').sort().join('')
            if (!words[key]) {
                words[key] = []
            }
            words[key].push(word)
        }

        return Object.values(words)
    }
}
