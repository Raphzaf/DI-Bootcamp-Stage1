# Task 1: Convert list of tuples to dictionary
pairs = [("name", "Elie"), ("job", "Instructor")]
d1 = {key: value for key, value in pairs}
print(d1)

# Task 2: Map state abbreviations to full names
abbreviations = ["CA", "NJ", "RI"]
states = ["California", "New Jersey", "Rhode Island"]
d2 = {abbreviations[i]: states[i] for i in range(len(abbreviations))}
print(d2)

# Task 3: Vowels as keys with value 0
vowels = "aeiou"
d3 = {char: 0 for char in vowels}
print(d3)

# Task 4: Alphabet position to letter
import string
alphabet = string.ascii_uppercase
d4 = {i+1: alphabet[i] for i in range(len(alphabet))}
print(d4)

# Super Bonus: Count vowels in a string
s = "awesome sauce"
vowels = "aeiou"
d5 = {v: s.count(v) for v in vowels}
print(d5)
