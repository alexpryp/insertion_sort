"use strict"

//Insertion sort
function InsertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let insPointer = i;
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > temp) {
                arr[j + 1] = arr[j];
                insPointer = j;
            }
        }
        arr[insPointer] = temp;
    }

    return arr;
}


//Test
console.log(InsertionSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10]));
