# Exercise 1

import random

def get_words_from_file(file_path):
    with open(file_path, "r") as f:
        words = f.read().splitlines()
    return words

def generate_sentence(words, num):
    sentence = random.sample(words, num)
    return " ".join(sentence).capitalize() + "."

def main():
    words = get_words_from_file("words.txt")
    while True:
        try:
            num = int(input("Enter the number of words: "))
            if num < 2:
                print("Please enter a number greater than 1.")
            else:
                break
        except ValueError:
            print("Invalid input. Please enter an integer.")
    print(generate_sentence(words, num))

if __name__ == "__main__":
    main()

