import random

def number_guessing_game():
    random_number = random.randint(1, 100)
    max_attempts = 7

    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    print(f"You have {max_attempts} attempts to guess it.")

    for attempt in range(1, max_attempts + 1):
        try:
            guess = int(input(f"Attempt {attempt}: Enter your guess: "))
        except ValueError:
            print("Please enter a valid number.")
            continue

        if guess < random_number:
            print("Too low!")
        elif guess > random_number:
            print("Too high!")
        else:
            print(f"Congratulations! You guessed the number in {attempt} attempt(s)!")
            break
    else:
        print(f"Sorry, you're out of attempts. The number was {random_number}.")
if __name__ == "__main__":
    number_guessing_game()
