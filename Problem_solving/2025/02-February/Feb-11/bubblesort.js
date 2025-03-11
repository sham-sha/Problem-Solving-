
let  array = [234, 43, 55, 63, 5, 6, 235, 547];

let bubbleSort = (arr) => {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (j = 0; j < (n - i - 1);j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr);    
}

bubbleSort(array);