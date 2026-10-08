class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        squares = defaultdict(set)

        for y in range(9):
            for x in range(9):
                value = board[y][x]
                if value == '.':
                    continue
                
                if value in rows[y] or value in cols[x] or value in squares[(y // 3, x // 3)]:
                    return False
    
                rows[y].add(value)
                cols[x].add(value)
                squares[(y // 3, x // 3)].add(value)


        return True