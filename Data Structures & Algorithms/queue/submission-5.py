class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class Deque:
    
    def __init__(self):
        self.head = Node(-1)
        self.tail = Node(-1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def isEmpty(self) -> bool:
        return self.head.next == self.tail        

    def append(self, value: int) -> None:
        node = Node(value)
        last_node = self.tail.prev
        last_node.next = node
        node.prev = last_node
        node.next = self.tail
        self.tail.prev = node

    def appendleft(self, value: int) -> None:
        node = Node(value)
        first_node = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = first_node
        first_node.prev = node

    def pop(self) -> int:
        if self.isEmpty():
            return -1

        pop_node = self.tail.prev
        last_node = pop_node.prev
        last_node.next = self.tail
        self.tail.prev = last_node
        return pop_node.value

    def popleft(self) -> int:
        if self.isEmpty():
            return -1

        pop_node = self.head.next
        first_node = pop_node.next
        self.head.next = first_node
        first_node.prev = self.head
        return pop_node.value
