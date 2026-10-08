class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

class LinkedList:
    
    def __init__(self):
        self.head = None
    
    def get(self, index: int) -> int:
        if self.head is None:
            return -1

        cur = self.head
        cur_position = 0
        while cur is not None and cur_position < index:
            cur = cur.next
            cur_position += 1

        if cur is not None:
            return cur.val

        return -1

    def insertHead(self, val: int) -> None:
        if self.head is None:
            self.head = Node(val)
            return

        self.head = Node(val, self.head)

    def insertTail(self, val: int) -> None:
        if self.head is None:
            self.insertHead(val)
            return

        cur = self.head
        while cur.next is not None:
            cur = cur.next

        cur.next = Node(val)

    def remove(self, index: int) -> bool:
        if self.head is None:
            return False

        if index == 0:
            self.head = self.head.next
            return True

        cur = self.head
        cur_position = 0
        while cur is not None and cur_position < (index - 1):
            cur = cur.next
            cur_position += 1

        if cur is not None and cur.next is not None:
            cur.next = cur.next.next
            return True

        return False

    def getValues(self) -> List[int]:
        arr = []
        cur = self.head
        while cur is not None:
            arr.append(cur.val)
            cur = cur.next

        return arr
        
