import random

user_input = input("Enter a 10-character string: ")

if len(user_input) < 10:
    print("String not long enough.")
elif len(user_input) > 10:
    print("String too long.")
else:
    print("Perfect string")

    # Step 3: Print first and last characters
    print("First character:", user_input[0])
    print("Last character:", user_input[-1])

    # Step 4: Build and print progressively
    for i in range(1, len(user_input) + 1):
        print(user_input[:i])

    # Bonus: Shuffle the string
    chars = list(user_input)
    random.shuffle(chars)
    jumbled = ''.join(chars)
    print("Jumbled string:", jumbled)
