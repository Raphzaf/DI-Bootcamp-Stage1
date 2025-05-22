from Week_2.Day_5.Miniproject1.anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker()

    while True:
        print("\n------ Anagram Checker ------")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ").strip()

        if choice == '2':
            print("Goodbye!")
            break
        elif choice == '1':
            user_input = input("Enter a word: ").strip()

            if len(user_input.split()) != 1:
                print("Error: Please enter only a single word.")
                continue

            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue

            word = user_input.strip()

            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"\nYOUR WORD : \"{word.upper()}\"")
                print("this is a valid English word.")
                print(f"Anagrams for your word: {', '.join(anagrams)}")
            else:
                print(f"\nYOUR WORD : \"{word.upper()}\"")
                print("this is NOT a valid English word.")
        else:
            print("Invalid choice. Please select 1 or 2.")

if __name__ == '__main__':
    main()
