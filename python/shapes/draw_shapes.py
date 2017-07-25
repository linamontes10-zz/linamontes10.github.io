from turtle import *
import math

# Name your Turtle.
josephine = Turtle()

# Set Up your screen and starting position.
josephine.penup()
setup(1000,500)
josephine.setposition(0,200)

### Write your code below:
### Preferences towards the pen and arrow:
pen =str(input('What color do you desire your shape to be outlined with?'))
josephine.pencolor(pen)
turtle_color=str(input('What color do you desire your shape to be?'))
josephine.fillcolor(turtle_color)

### Variables used for drawing the shapes:
distance=100
total_angle=360

josephine.begin_fill()
josephine.pendown()

### Allow the user to decide how many sides for the shape to build.
sides=int(input('How many sides do you desire your shape to have?'))

### Repeat the loop however many times the user asks for it to be repeated for above.
for x in range(sides):
	josephine.forward(distance)
	josephine.right(total_angle/sides)

josephine.end_fill()

# Close window on click.
exitonclick()