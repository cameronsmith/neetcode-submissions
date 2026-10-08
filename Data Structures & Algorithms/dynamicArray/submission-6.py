class DynamicArray:
    
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.offset = 0
        self.arr = [0] * capacity

    def get(self, i: int) -> int:
        return self.arr[i]

    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    def pushback(self, n: int) -> None:
        if self.offset == self.capacity:
            self.resize()

        self.arr[self.offset] = n
        self.offset += 1

    def popback(self) -> int:
        self.offset -= 1
        return self.arr[self.offset]

    def resize(self) -> None:
        self.capacity = self.capacity * 2
        new_arr = [0] * self.capacity

        for i in range(self.offset):
            new_arr[i] = self.arr[i]

        self.arr = new_arr

    def getSize(self) -> int:
        return self.offset
        
    
    def getCapacity(self) -> int:
        return self.capacity
