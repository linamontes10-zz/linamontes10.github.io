import random

names = ["Angela", "Bianca", "Clarisse", "Diana", "Ella", "Fiona", "Grace", "Hillary", "Ingrid", "Josephine", "Kylie", "Lea", "Marcela", "Nalini", "Ophelia", "Patricia", "Quinn", "Rebecca", "Sapna"]

from random import randrange
random_index = randrange(0,len(names))
print(random.choice(names))

