#Challenge 1

number = int(input("Enter a number: "))
length = int(input("Enter the desired length of the list: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print("List of multiples:", multiples)

#Challenge 2

user_input = input("Enter a string: ")

new_string = user_input[0] if user_input else ""


for char in user_input[1:]:
    if char != new_string[-1]:
        new_string += char

print("Modified string:", new_string)
