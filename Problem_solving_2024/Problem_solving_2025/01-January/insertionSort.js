const insertionSort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i-1;
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key

    }
    console.log(arr.join(" "))
}
let arr = [5, 4, 3, 2, 1]
insertionSort(arr);
cosole.log("hello DSA")


