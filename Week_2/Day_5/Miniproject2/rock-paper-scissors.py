# rock-paper-scissors.py
from game import Game

def get_user_menu_choice():
    options = {'1': 'Play a new game', '2': 'Show scores', '3': 'Quit'}
    print("\n------ Main Menu ------")
    for key, value in options.items():
        print(f"{key}. {value}")

    while True:
        choice = input("Choose an option (1-3): ").strip()
        if choice in options:
            return choice
        print("Invalid input. Please enter 1, 2, or 3.")

def print_results(results):
    print("\n------ Game Summary ------")
    print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == '1':
            game = Game()
            result = game.play()
            if result in results:
                results[result] += 1
        elif choice == '2':
            print_results(results)
        elif choice == '3':
            print_results(results)
            break

if __name__ == "__main__":
    main()