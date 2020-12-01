//Functions to be called =================


function change(paid, cookie){ //function with 2 variables
    if(paid > cookie){ // the amount of money paid and the cost of the item
        var myChange = paid - cookie;} //this returns the change youre getting in dollar amounts
    var quater = (myChange * 100) / 25; // convert my dollar amount to cents then divide by 25cents
    return quater;
}
// Main code ================================

var x = 3;
var y = 4;
var changeQuaters = change(y, x);


console.log("Here's  " + changeQuaters + " quaters");
