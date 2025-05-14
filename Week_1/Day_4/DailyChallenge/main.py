MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''

# Étape 1 : transformer en matrice 2D
matrix = [list(line) for line in MATRIX_STR.strip().split('\n')]

# Étape 2 & 3 : lecture par colonne et filtrage des lettres
decoded_message = ""

num_cols = len(matrix[0])
num_rows = len(matrix)

for col in range(num_cols):
    for row in range(num_rows):
        char = matrix[row][col]
        if char.isalpha():
            decoded_message += char

print(decoded_message)
