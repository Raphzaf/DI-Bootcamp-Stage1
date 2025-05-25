# Exercise 1 

# What is a class?

# A template defining a set of attributes (data) and methods (behavior).

# What is an instance?

# A concrete object created from a class, with its own values for the class’s attributes.

# What is encapsulation?

# The bundling of data (attributes) and methods that operate on that data into a single unit (the class).


# What is abstraction?

# A mechanism by which a new class (subclass or child) derives attributes and methods from an existing class (superclass or parent).


# What is inheritance?

#A mechanism by which a new class (subclass or child) derives attributes and methods from an existing class (superclass or parent). 


# What is multiple inheritance?

# A subclass derives from more than one parent class, inheriting features from all of them. Can help mix in functionality but may introduce complexity (e.g. the diamond problem).


# What is polymorphism?

# Literally “many forms.” The ability for different classes to be treated through the same interface.


# What is method resolution order or MRO?

# The order in which Python looks through base classes to find a method or attribute when you call it on an instance, especially important in multiple inheritance.


# Exercise 2 

import random
from dataclasses import dataclass

@dataclass(frozen=True)
class Card:
    suit: str
    value: str

    def __str__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    suits = ("Hearts", "Diamonds", "Clubs", "Spades")
    values = ("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K")

    def __init__(self):
        self._build_deck()

    def _build_deck(self):
        self.cards = [Card(suit, value) 
                      for suit in self.suits 
                      for value in self.values]

    def shuffle(self):
        if len(self.cards) != 52:
            self._build_deck()
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            raise IndexError("Cannot deal from an empty deck.")
        return self.cards.pop()

    def __len__(self):
        return len(self.cards)

    def __str__(self):
        return f"Deck of {len(self.cards)} cards"

# Example usage:
if __name__ == "__main__":
    deck = Deck()
    print(deck)            
    deck.shuffle()
    card = deck.deal()
    print(f"Dealt: {card}")  
    print(deck)            
