import random

def choose_word():
    words = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    return random.choice(words)

def display_current_state(word, guessed_letters):
    return ' '.join([letter if letter in guessed_letters else '*' for letter in word])

def draw_hangman(errors):
    stages = [
        "",
        " O ",
        " O \n | ",
        " O \n/| ",
        " O \n/|\\",
        " O \n/|\\\n/  ",
        " O \n/|\\\n/ \\"
    ]
    return stages[errors]

def hangman_game():
    word = choose_word()
    guessed_letters = set() 
    incorrect_guesses = 0
    max_errors = 6

    while incorrect_guesses < max_errors:
        print("\n" + display_current_state(word, guessed_letters))
        print(draw_hangman(incorrect_guesses))
        
        guess = input("Guess a letter: ").lower().strip()
        if not guess.isalpha() or len(guess) != 1:
            print("Enter a single alphabetical letter.")
            continue
        if guess in guessed_letters:
            print("You already guessed that letter.")
            continue

        guessed_letters.add(guess)
        if guess not in word:
            incorrect_guesses += 1

        if all(letter in guessed_letters for letter in word):
            print("\n" + display_current_state(word, guessed_letters))
            print("Congratulations! You've guessed the word.")
            return

    print(draw_hangman(incorrect_guesses))
    print(f"Game over! The word was '{word}'.")

hangman_game()
