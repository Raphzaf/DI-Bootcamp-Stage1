class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return self.__str__()

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        if not isinstance(other, Currency):
            raise TypeError(f"Cannot add Currency and {type(other).__name__}")
        if self.currency != other.currency:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        return self.amount + other.amount

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self
        if not isinstance(other, Currency):
            raise TypeError(f"Cannot add Currency and {type(other).__name__}")
        if self.currency != other.currency:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        self.amount += other.amount
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)


print(str(c1))          
print(int(c1))         
print(repr(c1))         
print(c1 + 5)         
print(c1 + c2)         

c1 += 5
print(c1)              
c1 += c2
print(c1)            
try:
    print(c1 + c3)     
except TypeError as e:
    print(e)


# Exercise 2 

from func import add_numbers

add_numbers(3, 7)

# Exercise 3 

import string
import random

letters = string.ascii_letters  

random_str = ''
for _ in range(5):
    random_char = random.choice(letters)
    random_str += random_char

print("Random string:", random_str)

# Exercise 4 

import datetime

def show_current_date():
    today = datetime.date.today()
    print("Current date:", today)

show_current_date()

# Exercise 5 

import datetime

def time_until_january_first():
    now = datetime.datetime.now()
    next_year = now.year + 1
    jan_first = datetime.datetime(year=next_year, month=1, day=1)
    time_left = jan_first - now
    print("Time left until January 1st:", time_left)

time_until_january_first()

# Exercise 6 

import datetime

def minutes_lived(birthdate_str):
    birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.datetime.now()
    time_lived = now - birthdate
    minutes = int(time_lived.total_seconds() // 60)
    print(f"You have lived approximately {minutes:,} minutes.")

minutes_lived("2003-12-13")

# Exercise 7 

from faker import Faker

users = []
def generate_fake_users(n):
    fake = Faker()
    for _ in range(n):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

generate_fake_users(5)

for i, user in enumerate(users, 1):
    print(f"User {i}:")
    for key, value in user.items():
        print(f"  {key.capitalize()}: {value}")
    print()
