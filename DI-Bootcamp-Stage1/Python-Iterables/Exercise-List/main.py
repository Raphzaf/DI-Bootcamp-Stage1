# Task 1: Print all values one by one
nums = [1, 2, 3, 4]
for num in nums:
    print(num)

# Task 2: Multiply all values by 20
print([num * 20 for num in [1, 2, 3, 4]])

# Task 3: First letter of each name
names = ["Elie", "Tim", "Matt"]
print([name[0] for name in names])

# Task 4: Return only even values
print([num for num in [1, 2, 3, 4, 5, 6] if num % 2 == 0])

# Task 5: Values present in both lists
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
print([val for val in list1 if val in list2])

# Task 6: Reverse and lowercase
words = ["Elie", "Tim", "Matt"]
print([word[::-1].lower() for word in words])

# Task 7: Letters in both strings
print([char for char in "first" if char in "third"])

# Task 8: Numbers divisible by 12 from 1 to 100
print([num for num in range(1, 101) if num % 12 == 0])

# Task 9: Remove vowels
print([char for char in "amazing" if char not in "aeiou"])

# Task 10: Create [[0,1,2], [0,1,2], [0,1,2]]
print([[num for num in range(3)] for _ in range(3)])

# Task 11: Create a 10x10 grid from 0 to 9
print([[num for num in range(10)] for _ in range(10)])
