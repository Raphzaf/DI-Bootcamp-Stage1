# Challenge 1 

input_string = input("Enter words separated by commas: ")
words = input_string.split(',')
sorted_words = sorted(words)
result = ','.join(sorted_words)
print(result)

# Challenge 2 
def longest_word(sentence):
    words = sentence.split()

    longest = ""
    max_length = 0

    for word in words:
        if len(word) > max_length:
            longest = word
            max_length = len(word)

    return longest
print(longest_word("Margaret's toy is a pretty doll."))           
print(longest_word("A thing of beauty is a joy forever."))        
print(longest_word("Forgetfulness is by all means powerless!"))   
