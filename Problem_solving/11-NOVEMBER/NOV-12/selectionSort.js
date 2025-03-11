let array = [34, 7, 23, -5, 0, 18, 99, -12, 56, 1];

function selectionSort(arr) {
const n = arr.length;
for( let i = 0 ; i <n-1;i++){
    let minIndex = i ;
    for(let j = i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j;
        }

    }
    if(minIndex!==i){
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
}
return arr
}
console.log(selectionSort(array));

