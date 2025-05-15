def display_board(board):
    print("Current Board:")
    for i, row in enumerate(board):
        print(f" {' | '.join(row)} ")
        if i < 2:
            print("---+---+---")

def player_input(board, player):
    while True:
        try:
            row, col = map(int, input(f"Player {player}, enter your move (row col): ").strip().split())
            if 0 <= row < 3 and 0 <= col < 3 and board[row][col] == ' ':
                return row, col
            print("Invalid move. Try again.")
        except ValueError:
            print("Invalid input. Enter two numbers separated by space.")

def check_win(board, player):
    return any(all(cell == player for cell in row) for row in board) or \
           any(all(board[r][c] == player for r in range(3)) for c in range(3)) or \
           all(board[i][i] == player for i in range(3)) or \
           all(board[i][2 - i] == player for i in range(3))

def check_tie(board):
    return all(cell != ' ' for row in board for cell in row)

def play():
    board = [[' '] * 3 for _ in range(3)]
    player = 'X'
    while True:
        display_board(board)
        r, c = player_input(board, player)
        board[r][c] = player
        if check_win(board, player):
            display_board(board)
            print(f"Player {player} wins!")
            break
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break
        player = 'O' if player == 'X' else 'X'

play()
