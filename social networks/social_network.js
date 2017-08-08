/*
INSTRUCTIONS:

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/

/*ENTER CODE HERE*/
var UserFriends ={
	"Lina":["Josephine", "Lea", "Sofia", "Amir", "Miah"],
	"Lea":["Josephine","Lina","Christine", "Angela"],
	"Sofia":["Sharon","Christian","Lesly","Lina"],
	"Josephine":["Mica","Lea", "Lina", "Amy"],
	"Clarisse":["Sapna", "Kristen", "Lina", "Lea"]
}

function displayNames() {
	document.getElementById("names").innerHTML = Object.keys(UserFriends);
}

function getFriends() {
	var girl = document.getElementById("nameInput").value;
	document.getElementById("friends").innerHTML = "These are " + girl + "'s" + " " + "friends" + ":" + UserFriends[girl];
}

/*EXTENSION*/

function addFriend() {
	var girlFromList = document.getElementById("nameOfGirl").value;
	var friendToAdd = document.getElementById("nameOfFriend").value;
	UserFriends[girlFromList].push(friendToAdd);
}