/* Requirements

Please write code that implements various functions, following the requirements in the list below:

Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
Write a function that returns the number of arguments passed to the function when called.
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long. */
// number 1
// function maxOfTwoNumbers (num1, num2){
//     if(num1 > num2)
//         return num1;
//     else if
//         (y > x)
//         return y;
//     else
//         return ("they are equal");
//     };
//     console.log(maxOfTwoNumbers(90, 15));
//
// //number 2
//
// function maxOfThreeNumbers(num1, num2, num3){
//     if(num1 > num2 && num1 > num3)
//         return num1;
//     else if
//         (num2 > num1 && num2 > num3)
//         return num2;
//     else if
//         (num3 > num1 && num3)
//         return num3;
//     else
//         return "they're all equal"
// };
//
//     console.log(maxOfThreeNumbers(23, 43, 51));
//
// //number3
// function isCharacterAVowel(character){
//     var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     for(let i of vowel){
//         if (character === i){
//             return true;
//         }
//     }
//     return false
// };
//
// console.log(isCharacterAVowel("A"));

// //number 4.
//
// function sumArray(num) {
//     var sum = 0;
//     for (var i = 0; i < num.length; i++){
//             sum += num[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4]));
//
// function multiplyArray(num){
//     var mult = 1;
//     for (var i = 0; i < num.length; i++){
//         mult = (mult * num[i])
//
//     }
//     return mult;
// }
// console.log(multiplyArray([1, 2, 3, 4]));

// //number 5
// function pen() {
//     console.log(arguments.length);
// }
// console.log(pen("jean", "and", "raheem", "helped", "with", "the", "code",));

//
// //number 6
// function reverse(s) {
//     var text = '';
//
//     for (var i = s.length - 1; i >= 0; i--) {
//     	text += s[i];
//     	continue
//     }
//     return text.toLowerCase();
// }
// console.log(reverse("solraC"));


// // number 7
// function long(arry) {
//     let word = "";
//     for(let i = 0; i < arry.length; i++){
//         if(word.length < arr[i].length){
//             word = arr[i];
//         }
//     }
//     return word;
// }
//
// console.log(long(["blasting", "hello", "juice"]));


// //section 8
//
// function fill (complete, i){
//     let word = [];
//     for(let z = 0; z < complete.length; z++){
//         if(complete[z].length > i){
//             word.push(complete[z]);
//         }
//     }
// return word;
// };
// console.log(fill(["fill", "spankkkk", "jean is a hater", "lol"], 5));

// bonus ================
//
// function reverseString(){
//     let word = "";
//     for(let i = this.length-1; i >= 0; i--) {
//         word += this[i];
//     }
//     return word;
// };
// String.prototype.reverseString = reverseString
// console.log("Per Scholas".reverseString());

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;

};
console.log(getFrequency("Blockchain"));
