# Function to check if number is positive, negative, or zero
def check_sign(number):
    if number > 0:
        print("Positive")
    elif number < 0:
        print("Negative")
    else:
        print("Zero")

# Example usage
check_sign(22)  # Output: "Positive"
check_sign(-8)  # Output: "Negative"
check_sign(0)   # Output: "Zero"