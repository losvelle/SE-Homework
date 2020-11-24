//Creating all prime numbers
for (var counter = 0; counter <= 20; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}


//finding all odd numbers #1

// for (var x = 1; x <= 10; x++) {
//         if (x === 0) {
//                 console.log(x +  " is even");
//         }
//         else if (x % 2 !== 0) {
//                 console.log(x + " is odd");
//         }
//         else if (x % 2 !== 0 && x % 2 !== x) {
//                 console.log(x + " is prime");
//         }
// }

// finding all Even numbers #1

// for (var x = 0; x <= 10; x++) {
//         if (x === 0) {
//                 console.log(x +  " is even");
//         }
//         else if (x % 2 === 0) {
//                 console.log(x + " is even");
//         }
// }


// for (var x = 0; x <= 20; x++) {
//
//      if (x % 2 === 0) {
//                 console.log(x + " even");
//         }
//         else if ( x % 2 == 1) {
//                 console.log(x + " prime");
//         }
//         else {
//                 console.log(x +" odd");
//         }
// }
