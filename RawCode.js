for (var j = 0; j < 11; j++) {
  console.log(j);
}


//The Following Code Changes The 'h1' Tag Heading To Red
document.getElementsByTagName("h1")[0].style.color = "#ff0000";



//Always use quotes for strings

//The Following Code Adds Image To The Page
document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner");
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});



//This Is A string
//Test In Console.log
"Hello," + " New York City"



/*
To convert Celsius to Fahrenheit, you can use the following formula:
F = C × 1.8 + 32
NOTE: "12°C" reads as "12 degrees Celsius"
*/
var celsius = 12;
var fahrenheit = celsius*1.8+32;

console.log(fahrenheit);



/*
Because quotes are used to signify the beginning and end of a string, you can use the backslash character to escape the quotes in order to access the literal quote character.
*/
console.log("The man whispered, \"please speak to me.\"");



//String Equality for All
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);



/*
Build a single string that resembles the following joke.

Why couldn't the shoes go out and play?
They were all "tied" up!
*/
var joke = "Why couldn't the shoes go out and play?\n\tThey were all \"tied\" up!";
console.log(joke);



/*
Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
Blowing from the west
Fallen leaves gather
In the east.
Each string should be printed on its own line.
*/
var haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east.";
console.log(haiku);
