// Mikhail Koshelev © 2016
var kolris = 3;		// Amount picture
function makeArrayHTML() // Reading the array of the link
{
this.length = makeArrayHTML.arguments.length;
for (var i = 0; i < this.length; i++) this[i+1] = makeArrayHTML.arguments[i];
}
function makeArray() // Reading the array of the picture
{
this.length = makeArray.arguments.length;
for (var i = 0; i < this.length; i++) this[i+1] = makeArray.arguments[i];
}
// Array of the picture
var teams = new makeArray 
(
"image/slider_image1.jpg", // Name of the files picture
"image/slider_image2.jpg", 
"image/slider_image3.jpg"
);
// Array of the link
var teamsHTML = new makeArrayHTML 
(
"index1.html", // Links of the pictures
"index2.html", 
"index3.html"
);
var eatHim = 1;
var href = "";
var t;
function Scrolling() 
{
t = document.getElementById("hrf"); 
t.innerHTML = '<a href="'+teamsHTML[eatHim]+'"><IMG NAME = "ris" width="200px" height="150px" border="0" SRC = ""></a>';
lion = new Image(200, 150);
document.img.ris.src = teams[eatHim];
eatHim += 1;
if (eatHim == (kolris+1)) eatHim = 1;
setTimeout("Scrolling()", 1000);	// Time images picture (ms)
}