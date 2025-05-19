# Exercise 1 

class Pet:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is walking."


class Bengal(Cat):
    pass


class Chartreux(Cat):
    pass


class Siamese(Cat):
    def __init__(self, name, age, vocal=True):
        super().__init__(name, age)
        self.vocal = vocal

    def meow(self):
        return f"{self.name} says meow!"


bengal_cat = Bengal("Simba", 2)
chartreux_cat = Chartreux("Luna", 4)
siamese_cat = Siamese("Milo", 3)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pet(all_cats)
sara_pets.walk()

# Exercise 2 

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        winner = self.name if self_power > other_power else other_dog.name
        return f"{winner} wins the fight"


dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Buddy", 3, 20)
dog3 = Dog("Max", 4, 25)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))


# Exercise 3 

import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        winner = self.name if self_power > other_power else other_dog.name
        return f"{winner} wins the fight"


class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [dog.name for dog in args]
        names.append(self.name)
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")


# Exercise 4 

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found in the family.")

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, {member.age} years old")


ma_famille = Family("Dupont")
ma_famille.born("Emma", 16)
ma_famille.born("Lucas", 19)
ma_famille.born("Chloé", 22)

ma_famille.family_presentation()

ma_famille.check_majority("Emma")
ma_famille.check_majority("Lucas")
ma_famille.check_majority("Chloé")



