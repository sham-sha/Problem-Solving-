let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSortStrings(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr; 
}
bubbleSortStrings(numbers)

function array(sortnum) {
    let str = "";
    for (let i = 0; i < sortnum.length; i++) {
        str += sortnum[i] +" "; 
    }
    return str; 
}
console.log(array(bubbleSortStrings(numbers)))
