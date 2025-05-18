# Exercise 1 

class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

cat1 = Cat("Whiskers", 5)
cat2 = Cat("Mittens", 3)
cat3 = Cat("Shadow", 7)

def get_oldest_cat(cat_a, cat_b, cat_c):
    if cat_a.age >= cat_b.age and cat_a.age >= cat_c.age:
        return cat_a
    elif cat_b.age >= cat_a.age and cat_b.age >= cat_c.age:
        return cat_b
    else:
        return cat_c

oldest = get_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

# Exercise 2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name}")


# Exercise 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()

# Exercise 4

class Zoo:
    def __init__(self, zoo_name, zoo_animals=None):
        self.name = zoo_name
        self.animals = zoo_animals if zoo_animals else []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        return self.animals

    def remove_animal(self, animal_to_remove):
        if animal_to_remove in self.animals:
            self.animals.remove(animal_to_remove)

    def sort_animals(self):
        self.animals.sort()

    def get_groups(self):
        grouped = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped:
                grouped[first_letter] = []
            grouped[first_letter].append(animal)
        return grouped

    def display_groups(self):
        groups = self.get_groups()
        for letter in sorted(groups):
            print(f"{letter}: {groups[letter]}")


zoo = Zoo("Afternoon Zoo", ["Zebra", "Tiger", "Antelope", "Bear", "Giraffe"])
zoo.add_animal("Elephant")
zoo.remove_animal("Zebra")
zoo.sort_animals()

print("Animals in the zoo (sorted):")
for animal in zoo.get_animals():
    print(f"- {animal}")

print("\nAnimal groups by letter :")
zoo.display_groups()


