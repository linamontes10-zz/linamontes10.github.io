start = '''
You're on your way to work, and it's your first day.
You're wearing your favorite white shirt with beige pants, pairing it off with a white pair of heels. You feel like 
you're on top of the world. You get off at the 1 train at 59th street. You walk down the steps to change platforms.
As you take a bite out of your bacon egg and cheese,you see the people ahead of you walking away from the B train
platform. A man appears dressed in MTA uniform and he says 'A B C AND D TRAINS ARE NOT RUNNING DOWNTOWNN!'
Are.
You.
Serious.
Can you believe that you even imagined that you were on top of the world at some point? Crazy, right? The universe
works in mysterious ways. You begin to curse the universe, however now you must decide. You can either:
1. walk to the nearest station, and end up taking the Q train to work

or

2. wait 15 minutes to see if the trains will start running again
'''


print(start)


user_input = input("Type '1' to walk to the nearest station or '2' to wait.")
if user_input == "1":
	print('''
		You decide to walk to the nearest train station in order to take the Q train downtown. Major props to my
		iPhone for helping me in those times of crisis. Congrats! You are outside your job with time to spare!
		You're feeling really tired after a stressful commute - and you kind of want to treat yourself.
		Now you must decide. You can either:
		1. grab a caramel latte from Dunkin Donuts

		or

		2. arrive to work early
		''')
	user_input = input("Type '1' to walk to grab a caramel latte or '2' to arrive to work early. ")

	if user_input == "1":
		print('''
			You decide to grab a caramel latte from the place that makes America run, Drunkin Donuts.
			As you walk out the door, a rude New Yorker bumps into you and you spill your latte all over your shirt.
			And of course, he barely apologizes. What else did you expect? You have to be at work in 5 minutes.
			Now you must decide: You can either
			1. go to work on time with a latte stain on your white shirt

			or

			2. go to the nearest Zara, 10 minutes away, and buy yourself a new  shirt
			''')
		user_input = input("Type '1' to go to work with a latte stain on your shirt or '2' to go to the nearest Zara. ")

		if user_input == "1":
			print('''
				You walk into work, right on time. As you sit down, your co-workers enter the room. You are the 'new girl'
				with a huge stain on your shirt. Nice job. They mock you continuosly over the course of the day.
				Congratulations, you kept your job... but now you're the work laughing stock.
				''')
			print("The end! ")

		elif user_input == "2":
			print('''
				You decide to go to Zara to buy a new shirt, which seems like an easy enough mission. However, you end up
				taking WAY longer than expected. As you look around, you receive a call from your boss.
				
				Uh oh.

				Sorry, but you lost your job.
				''')
			print("The end! ")

	elif user_input == "2":
		print('''
			You arrive to work early, deciding to skip coffee. You are EXTREMELY TIRED, but hey, at least you're early.
			As you walk in, your boss commends you on your dedication, especially on your first day! He can clearly tell
			the type of person you are.

			Congratulations! He offers you a promotion! Now you can afford those Birkenstocks you really want!
			''')
		print("The end! ")
 
elif user_input == "2":
	print('''
		You decide to wait 15 minutes for the trains to start running again... However, they do not. It's hot, you're
		frustrated, and your job is on the line. Now you must decide. You can either:
		1. walk to the nearest station, and end up taking the Q train to work
		
		or

		2. continue waiting 15 minutes to see if the trains will start running again
		''')
	user_input = input("Type '1' to walk to the nearest station or '2' to wait. ")
	if user_input == "1":
		print('''
			You take the Q train, and you arrive on time! You get to keep your job. Life continues regularly.
			''')

		print("The end! ")

	elif user_input == "2":
		print('''
			You wait another 15 minutes. You are late to work. As the B train you were awaiting approaches, you
			become excited. However, in that moment your boss calls and tells you that you are fired because you are late.

			What else could you expect from the girl late on her first day?
			''')

		print("The end! ")

 
 