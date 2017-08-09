var stringArray = [];

function makeArray() {
  var arrayInput = document.getElementById("ArrayInput").value;
  var split = arrayInput.split(" ");
  for(var i =0; i < split.length; i++){
      stringArray.push(parseInt(split[i]));
  }

  displayUnsortedArray()
  insertionSort()
}

function displayUnsortedArray() {
  document.getElementById("unsortedArray").innerHTML = stringArray.toString();
}

function insertionSort() {
  for(var i = 1; i < stringArray.length; i++) {
    var element = stringArray [i];
    var j=i;
    while (j >= 0 && stringArray[j-1] > element) {
      var temp = stringArray[j-1];
      stringArray[j-1] = stringArray[j];
      stringArray[j]=temp;
      j=j-1;
    }
    console.log (stringArray);
  }
  document.getElementById("sortedArray").innerHTML = stringArray;
}

function clearArray() {
   stringArray = [];
  document.getElementById("sortedArray").innerHTML = "";
  document.getElementById("unsortedArray").innerHTML = "";


}