def human_years_cat_years_dog_years(humanYears):
    if humanYears == 1:
        catYears = 15
        dogYears = 15
    elif humanYears == 2:
        catYears = 15 + 9
        dogYears = 15 + 9
    else:
        catYears = 15 + 9 + (humanYears - 2) * 4
        dogYears = 15 + 9 + (humanYears - 2) * 5
    return [humanYears, catYears, dogYears]

# Tests demandés
print(human_years_cat_years_dog_years(1))   # [1, 15, 15]
print(human_years_cat_years_dog_years(2))   # [2, 24, 24]
print(human_years_cat_years_dog_years(10))  # [10, 56, 64]