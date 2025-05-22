class AnagramChecker:
    def __init__(self, wordlist_file='wordlist.txt'):
        with open(wordlist_file, 'r') as file:
            self.words = set(line.strip().lower() for line in file if line.strip().isalpha())

    def is_valid_word(self, word):
        return word.lower() in self.words

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if w != word and self.is_anagram(word, w)]

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())