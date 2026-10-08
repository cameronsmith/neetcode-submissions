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
        return self.head == self.tail.prev
        

    def append(self, value: int) -> None:
        # new node
        new_node = Node(value)
        new_node.next = self.tail
        new_node.prev = self.tail.prev

        # last node
        self.tail.prev.next = new_node

        # tail
        self.tail.prev = new_node
        

    def appendleft(self, value: int) -> None:
        # new node
        new_node = Node(value)
        new_node.prev = self.head
        new_node.next = self.head.next

        # first node
        self.head.next.prev = new_node

        # head
        self.head.next = new_node

    def pop(self) -> int:
        if self.isEmpty():
            return -1

        pop_node = self.tail.prev
        next_node = pop_node.prev
        next_node.next = self.tail
        self.tail.prev = next_node
        
        return pop_node.value                

    def popleft(self) -> int:
        if self.isEmpty():
            return -1
        
        pop_node = self.head.next
        next_node = pop_node.next
        next_node.prev = self.head
        self.head.next = next_node

        return pop_node.value
