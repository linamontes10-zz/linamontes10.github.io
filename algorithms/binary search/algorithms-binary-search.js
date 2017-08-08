/*
INSTRUCTIONS:

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/

/*ENTER CODE HERE*/
var numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
];

function displayArray() {
	document.getElementById("numbers").innerHTML = numbers.toString();
}

function binarySearch() {
	console.log(numbers);
	var low = 0;
	var high = numbers.length - 1;
	var result = -1;
	var target = document.getElementById("numberInput").value;

		while (high >= low) {
			var middle = Math.floor((high+low)/2);
			if (numbers[middle]==target) {
				result = middle;
				break;
			}
			else if (numbers[middle]<target) {
				low = middle + 1;
			}
			else {
				high = middle - 1;
			}
		}
	if (result != -1) {
		document.getElementById("index").innerHTML = target + " is present at index " + result + ".";
	}
	else {
		document.getElementById("index").innerHTML = target + " is not present in array. Please, try again."
	}
}

