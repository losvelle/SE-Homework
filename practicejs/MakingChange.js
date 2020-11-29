// var cookie = 2;
// var paid = 20;
//
// if(paid > cookie){
//     var myChange = paid - cookie; // creeating a variable for the change once i paid for the cookie
// }
// quater = (myChange * 100) / 25; // converting my change into cents so that i can
//
// console.log("Your change is $" + myChange)
// console.log("But here are " + quater + " quaters instead")


// ===============================================================================
// Functions to be called =================
// function cup(paid, cookie){
//     if(paid > cookie){
//         var myChange = paid - cookie;}
//     var quater = (myChange * 100) / 25;
//     return quater;
// }
// // Main code ================================
//
// var x = 3;
// var y = 4;
// var changeQuaters = cup(y, x);
//
//
// console.log("But here are " + changeQuaters + " quaters instead");

// ================================================================================

var myMoney = 300
var cost = 17
var myChange = myMoney - cost // equals $72
console.log(myChange)
while(myChange >= 1){
    if(myChange >= 100){
        console.log("$100");
        myChange = myChange - 100;
    }
    if( myChange >= 50 && myChange < 100){
        console.log("$50");
        myChange = myChange - 50;
    }
    if (myChange >= 20 && myChange < 50){
        console.log("$20");
        myChange = myChange - 20;
    }
    if(myChange >= 10 && myChange < 20){
         console.log("$10");
         myChange = myChange - 10;
    }
    if(myChange >= 5 && myChange < 10){
         console.log("$5");
         myChange = myChange - 5;
    }
    if (myChange >= 1 && myChange < 5){
        console.log("$1");
        myChange = myChange - 1;
    }
}
