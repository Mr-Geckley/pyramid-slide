// It is taking every bit of my will power not to go through and format this file. 
// But one must be careful how one spends their time.

// display all features on initial paint
 displayHeight();
 determineHeightAndThenDrawPyramid();

 // verbose function name explains it all
function determineHeightAndThenDrawPyramid() {

// grab data from slider
height = document.getElementById("height").value;

// input said data as parameter into 'drawPyramid() and call function
    drawPyramid(height);
}

// parses our pryamid
 function drawPyramid(height) {

// target field where we want to draw our pyramid
let parent = document.getElementById("pyramid");

// the we create a binding for the desired children of field
let chillins = parent.getElementsByTagName("p");

     // loop throught those suckers and remove the content before a new pyramid is created
     while (parent.hasChildNodes()) {
         parent.removeChild(parent.firstChild);
     };

    // target the dropdown so can access it's data
    let brickMenu = document.getElementById("brick_symbol");

    // pull the data from the element
    let brickSymbol = brickMenu.options[brickMenu.selectedIndex].value;

     // build the pyramid
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += brickSymbol;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

// shows selected pyramid height
function displayHeight() {

    // set the content of desired element --------------- to the value of the height selector
    document.getElementById("height_display").innerHTML = parseInt(document.getElementById("height").value);
};

// not sure why I have this function that just calls another function. But I'm tired. And everything works like it's supposed to. So Imma leave good enough alone.
function changeBrick () {
    determineHeightAndThenDrawPyramid();
    
};