"""
This file is to properly format the lyrics
"""

import string

with open("lyric.txt", "r") as f:
    text = f.read()

print(" ".join(text.splitlines()).lower().translate(str.maketrans('', '', string.punctuation)))
