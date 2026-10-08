class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1
        while (left < right) {
            let left_char = s[left].toLowerCase()
            while (
                left < right
                && !this.isValidInput(left_char)) {
                    console.log(left_char)
                    left++
                    left_char = s[left].toLowerCase()
            }

            let right_char = s[right].toLowerCase()
            while (
                left < right
                && !this.isValidInput(right_char)) {
                    right--
                    right_char = s[right].toLowerCase()
            }

            if (left_char !== right_char) {
                return false
            }

            left++
            right--
        }

        return true
    }

    isValidInput(c) {
        const char = c.toLowerCase().charCodeAt(0)
        const num_start = '0'.charCodeAt(0)
        const num_end = '9'.charCodeAt(0)
        const alpha_start = 'a'.charCodeAt(0)
        const alpha_end = 'z'.charCodeAt(0)
        
        return (char >= num_start && char <= num_end) || (char >= alpha_start && char <= alpha_end)
    }
}
