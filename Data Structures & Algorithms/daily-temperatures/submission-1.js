class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)
        const stack = [] // pair: [temp, index]

        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i]
            while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
                const [pop_temp, pop_index] = stack.pop()
                result[pop_index] = i - pop_index
            }
            stack.push([temp, i])
        }

        return result
    }
}
