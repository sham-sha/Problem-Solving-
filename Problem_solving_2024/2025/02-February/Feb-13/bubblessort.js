function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n - 1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
        console.log(arr.join(" "))
    }
}

let array = [42, 7, 15, 89, 3, 56, 21, 10, 67, 34];

