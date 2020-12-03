let bubbleSort = (Arr) => { // create the bubble sort function
    let len = Arr.length; //creating a length variable
    let swapped; // creating a variable to keep track of the amount of times the arrays are swapped
    do {
        swapped = false; //this is false if there were no swaps made in the array
        for (let i = 0; i < len; i++) {
            if (Arr[i] > Arr[i + 1]) { // checks to see if the index at i is greater than the index immediately to the rigth
                let tmp = Arr[i]; // creating a temporary variable for the index at i
                Arr[i] = Arr[i + 1]; // if [i+1] is true copy the value into the i index
                Arr[i + 1] = tmp; // copy what was in index i into the index of [i+1] this finishes the swap
                swapped = true; //the variable swap will be true, which allows the loop to continue
            }
        }
    } while (swapped); //this while loop allows for 1 verification before the code stops. making it more efficient
    return Arr;
};

console.log(bubbleSort([5, 3, 8, 4, 6]));
