class MinStack:

    def __init__(self):
        self.stack = []
        self.min_values = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        min_value = min(self.min_values[-1] if self.min_values else val, val)
        self.min_values.append(min_value)

    def pop(self) -> None:
        self.stack.pop()
        self.min_values.pop()
        

    def top(self) -> int:
        return self.stack[-1]
        

    def getMin(self) -> int:
        return self.min_values[-1]
        
