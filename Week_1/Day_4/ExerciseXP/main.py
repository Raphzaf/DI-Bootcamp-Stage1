# Exercise 1 

def display_message():
    print("I am learning about functions in Python.")

display_message()

# Exercise 2
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

# Exercise 3

def describe_city(city, country = "Unknown"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")   
describe_city("Paris") 

# Exercise 4
import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_numbers(random.randint(1, 100))

# Exercise 5

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")

make_shirt()
make_shirt(size="medium")
make_shirt(size="small", text="Custom message.")

# Exercise 6 

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(names):
    for name in names:
        print(name)

def make_great(names):
    for i in range(len(names)):
        names[i] = names[i] + " the Great"

make_great(magician_names)
show_magicians(magician_names)

# Exercise 7 

import random

def get_random_temp():
    return round(random.uniform(-10, 40), 1)

def main():
    temp = get_random_temp()
    print(f"\nThe temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp <= 9:
        print("Quite chilly! Don't forget your coat.")
    elif 10 <= temp <= 16:
        print("Chilly! Maybe grab a jacket.")
    elif 17 <= temp <= 23:
        print("Nice weather.")
    elif 24 <= temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")

main()


