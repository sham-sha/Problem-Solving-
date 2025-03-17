function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        console.log(arr.join(" "))
    }
}

let array = [42, 7, 15, 89, 3, 56, 21, 10, 67, 34];
insertionSort(array)






