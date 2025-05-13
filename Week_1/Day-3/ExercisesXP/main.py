# Exercise 1 

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary = dict(zip(keys, values))
print(dictionary)

# Exercise 2

family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

def ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

total_cost = 0
for member, age in family.items():
    price = ticket_price(age)
    print(f"{member.title()}: ${price}")
    total_cost += price

print(f"\nTotal cost: ${total_cost}")

 
# Exercise 3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print(f"Zara's clients include: {', '.join(brand['type_of_clothes'])}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(f"Last competitor: {brand['international_competitors'][-1]}")
print("Major colors in the US:", brand["major_color"]["US"])
print("Number of keys in brand dictionary:", len(brand))
print("All keys in brand dictionary:", list(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)

# Exercise 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

character_to_index = {}
for index, character in enumerate(users):
    character_to_index[character] = index
print(character_to_index)

index_to_character = {}
for index, character in enumerate(users):
    index_to_character[index] = character
print(index_to_character)

sorted_users = sorted(users)
sorted_character_to_index = {}
for index, character in enumerate(sorted_users):
    sorted_character_to_index[character] = index
print(sorted_character_to_index)






