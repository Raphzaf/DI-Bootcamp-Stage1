# Challenge 1 

word = input("Enter a word: ")
char_indices = {}

for index, char in enumerate(word):
    if char in char_indices:
        char_indices[char].append(index)
    else:
        char_indices[char] = [index]

print(char_indices)

# Challenge 2

items_purchase = { "Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

wallet_amount = float(wallet.replace("$", "").replace(",", ""))

affordable_items = []

for item, price in items_purchase.items():
    price_value = float(price.replace("$", "").replace(",", ""))
    if price_value <= wallet_amount:
        affordable_items.append(item)

if not affordable_items:
    print("Nothing")
else:
    affordable_items.sort()
    print(affordable_items)

