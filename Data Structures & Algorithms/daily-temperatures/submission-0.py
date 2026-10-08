class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # 30,38,30,36,35,40,28
        # ^
        # new index: 7
        # values: [40]
        # positions: [6]

        # [1,4,1,2,1,0,0]

        values = []
        positions = []
        output = [0] * len(temperatures)

        for i in range(0, len(temperatures)):
            temp = temperatures[i]
            if len(values) == 0:
                values.append(temp)
                positions.append(i)
                continue
            
            while len(values) > 0 and values[-1] < temp:
                position = positions.pop()
                values.pop()

                value = i - position
                output[position] = value

            values.append(temp)
            positions.append(i)

        return output
        

