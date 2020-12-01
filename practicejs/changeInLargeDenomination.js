// Provide change by the larest denomintation
function cash(money, cost){ // creating the variables for money and price
    var myChange = myMoney - cost //this will return what your change should be
    console.log("Your change is $" + myChange + " here are your large bills.") // print the change to be able to checkwork afterwards
    while(myChange >= 1){ // any time you have more than $1 the algo will run
        if(myChange >= 100){ //if your change is greater than $100
            console.log("$100");
            myChange = myChange - 100;
        }
        if( myChange >= 50 && myChange < 100){ //when the chane is greater than $50
            console.log("$50");
            myChange = myChange - 50;
        }
        if (myChange >= 20 && myChange < 50){ //when the chane is greater than $20
            console.log("$20");
            myChange = myChange - 20;
        }
        if(myChange >= 10 && myChange < 20){ //when the chane is greater than $10
             console.log("$10");
             myChange = myChange - 10;
        }
        if(myChange >= 5 && myChange < 10){ //when the chane is greater than $5
             console.log("$5");
             myChange = myChange - 5;
        }
        if (myChange >= 1 && myChange < 5){ //when the chane is greater than $1
            console.log("$1");
            myChange = myChange - 1;
        }
    }
    return cash; // returns the value to the variable cash

}

var myMoney = 279
var cost = 20
var change = cash(myMoney, cost); //calling the function cash & providing the variables needed
