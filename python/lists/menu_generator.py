import random

sides = ["Soup", "Caeser Salad", "Coleslaw", "Fries", "Mashed Potatoes", "Corn", "Edamame"]

main = ["Chicken Parmesan", "Rice with Chicken", "Spaghetti with Meatballs", "Barbqecue Wings", "Chicken Teriyaki", "Pizza", "Lasagna"]

desserts = ["Chocolate Icecream", "Dirt Cup", "Fried Oreos", "Funnelcake", "Chcocolate Chip Cookie Cake", "NY Cheesecake"]

from random import randrange
random_index = randrange(0,len(sides))
print(random.choice(sides))

from random import randrange
random_index = randrange(0,len(main))
print(random.choice(main))

from random import randrange
random_index = randrange(0,len(desserts))
print(random.choice(desserts))