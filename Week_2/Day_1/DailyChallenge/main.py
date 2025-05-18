class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        result = f"{self.name}'s farm\n"
        result += "\n".join(f"{animal} : {count}" for animal, count in self.animals.items())
        result += "\n\nE-I-E-I-O!"
        return result

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        if not animal_types:
            return f"{self.name}'s farm has no animals."
        elif len(animal_types) == 1:
            return f"{self.name}'s farm has {animal_types[0]}."
        else:
            return f"{self.name}'s farm has {', '.join(animal_types[:-1])} and {animal_types[-1]}."


macdonald = Farm("McDonald")
macdonald.add_animal("cow", 5)
macdonald.add_animal("sheep")
macdonald.add_animal("sheep")
macdonald.add_animal("goat", 12)

print(macdonald.get_info())
print()
print(macdonald.get_animal_types())
print()
print(macdonald.get_short_info())
