let insertionSort = (array) => {
    let len = array.length;
    for (let i = 1; i < len; i++) {
        let key = array[i];
        let k = i - 1;
        while (k >= 0 && array[k] > key) {
            array[k + 1] = array[k];
            k = k - 1;
        }
        array[k + 1] = key;
    }
    return array;
};

console.log(insertionSort([90, 1, 20, 6, -4, -2, 0, 3, 5, 32, 56, 9]));
