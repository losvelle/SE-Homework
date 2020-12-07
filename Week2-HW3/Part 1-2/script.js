var colors = ["blue", "orange", "purple", "pink", "red", "yellow"]; // colors that the circles can become

let elements = document.getElementsByClassName("circle"); // targeting the class name circle
var len = elements.length; // creating the a variable for the length

var currentColorIndex = 0; //variable for the index
var colorsLength = colors.length;



// Start of Functions
function colorChange() {

  console.log("before increment" + currentColorIndex);
  if (currentColorIndex > colorsLength) {
    currentColorIndex = 0;
  } else {
    for (i = 0; i < len; i++)
      elements[i].style.backgroundColor = colors[currentColorIndex];
  }
    currentColorIndex++;
    console.log("after increment" + currentColorIndex);

    if(currentColorIndex >= colorsLength)
    currentColorIndex = 0;
}
