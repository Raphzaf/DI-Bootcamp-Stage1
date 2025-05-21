import json
import string
import re

STOP_WORDS = set([
    "a", "an", "the", "is", "in", "on", "at", "of", "this", "and", "to", "for", "with", "that", "by"
])

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.lower().split()
        count = words.count(word.lower())
        return count if count > 0 else f"'{word}' not found."

    def most_common_word(self):
        words = self.text.lower().split()
        freq = {}
        for word in words:
            freq[word] = freq.get(word, 0) + 1
        return max(freq, key=freq.get) if freq else None

    def unique_words(self):
        return list(set(self.text.lower().split()))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            content = file.read()
        return cls(content)

class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        words = self.text.split()
        filtered = [word for word in words if word.lower() not in STOP_WORDS]
        return ' '.join(filtered)

    def remove_special_characters(self):
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)
