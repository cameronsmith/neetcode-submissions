class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = []
        for (let i = 0; i < position.length; i++) {
            const pair = [position[i], speed[i]]
            cars.push(pair)
        }
        cars.sort((a, b) => b[0] - a[0])

        const stack = []
        for (const [position, speed] of cars) {
            stack.push((target - position) / speed)
            if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }

        return stack.length
    }
}
