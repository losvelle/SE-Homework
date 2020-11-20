//Enter the students grade as interger

var grade = "sally";

if (grade >= 90){
    console.log("A");
} else if (grade >= 80){
    console.log("B");
} else if (grade >= 70){
    console.log("C");
} else if (grade >= 55){
    console.log("D");
} else if(grade < 55){
    console.log("F");
} else{
    console.log("Not a Number");
}


// Clock Displays Greetings based on time

var time = 1500;

if(time >= 0500 && time <= 1159){
    console.log("Good Morning");
} else if(time >= 1200 && time <= 1600){
    console.log("Good Afternoon");
} else{
    console.log("Hey there");
}



//Display the larger of two numbers

var num1 = 90, num2 = 3;
if(num1 > num2){
    console.log(num1);
} else if(num1 == num2){
    console.log("Numbers are the same");
} else{
    console.log(num2);
}
