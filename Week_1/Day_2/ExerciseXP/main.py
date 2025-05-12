#Exercise 1 
my_fav_numbers = {3, 7, 42}
my_fav_numbers.add(13)
my_fav_numbers.add(21)

my_fav_numbers.remove(21)

friend_fav_numbers = {8, 15, 42}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

# Exercise 2
my_tuple = (1, 2, 3)

new_tuple = my_tuple + (4, 5)

print("Original tuple:", my_tuple)
print("New tuple:", new_tuple)

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
basket.clear()

print("Number of 'Apples' before clearing:", apple_count)
print("Final basket:", basket)

# Exercise 4
sequence = []
current = 1.5

while current <= 5:
    sequence.append(current)
    current += 0.5

print(sequence)

# Exercise 5

for number in range(1, 21):
    print(number)

print("---")  

for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(number)


# Exercise 6

my_name = "Alice"

while True:
    user_input = input("Enter your name: ")
    if user_input == my_name:
        print("That's my name too!")
        break

# Exercise 7

favorite_fruits = input("Enter your favorite fruits (separated by spaces): ").split()

chosen_fruit = input("Enter the name of any fruit: ")

if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# Exercise 8

toppings = []

while True:
    user_input = input("Enter a pizza topping (or 'quit' to finish): ")
    if user_input == "quit":
        break
    toppings.append(user_input)
    print("Adding", user_input, "to your pizza.")
total_cost = 10 + (len(toppings) * 2.50)
print("Total cost:", total_cost)
print()

# Exercise 9

#Instructions: 
# Ask for the age of each person in a family who wants to buy a movie ticket.
#  Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.


# Bonus:

#Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
#Write a program to:
#Ask for each person’s age.
#Remove anyone who isn’t allowed to watch.
#Print the final list of attendees.

total_cost = 0
ages = input ("Enter the ages of the family members (separated by spaces): ").split()

for age in ages:
    age = int(age)
    if age < 3:
        total_cost += 0
    elif age >= 3 and age <= 12:
        total_cost += 10
    else:
        total_cost += 15
print("Total ticket cost: $", total_cost) 

attendees = input("Enter the age of each teen (separated by spaces): ").split()
allowed = []

for age_str in attendees:
    age = int(age_str)
    if 16 <= age <= 21:
        allowed.append(age)

print("Allowed attendees:", allowed)

# Exercise 10

sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
finished_sandwiches = []

while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")

for sandwich in sandwich_orders:
    print(f"I made your {sandwich} sandwich.")
    finished_sandwiches.append(sandwich)

# Afficher la liste finale
print("Finished sandwiches:", finished_sandwiches)



