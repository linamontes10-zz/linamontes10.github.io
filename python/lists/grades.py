from numpy import *

# Each of our grades
kristen_grades = [90, 85, 100, 77, 94]
clarisse_grades = [96, 83, 89, 97, 86]
sapna_grades = [82, 91, 94, 87, 99]

# Class grade book
grade_book = [kristen_grades, clarisse_grades, sapna_grades]

'''
This is what our grade book looks like
[	[90, 85, 100, 77, 94]
	[96, 83, 89, 97, 86]
	[82, 91, 94, 87, 99] ]

'''

# Traverse through the grade book and print all the indivdual grades
print("The grades are below:")
for row in grade_book:
	for x in row:
		print(x)
	print()


# Extensions: Find the class average, median, and standard deviation
# (For the extentions google for hints!)

total_sum=0

for row in grade_book:
	for x in row:
		total_sum=x+total_sum
print("The total sum is as follows:")
print(total_sum)
print()
print("The average is as follows:")
print(total_sum/15)

# Super extra extensions: calculate the student with highest/lowest average