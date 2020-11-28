// ============== FUNCTIONS

=> theSum(x, y) {
    return x + y;
};

function oddEven(x){
    if(x % 2 == 0)
        return "even";
        else{
            return "odd"
        }
};
// ==============MAIN METHOD
var sum;

sum = theSum(10, 10);
console.log(sum)
//=============================
console.log(oddEven(-5))
