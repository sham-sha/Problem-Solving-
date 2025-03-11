// const selectionSort = (arr) => {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex != i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//         }
//         console.log(arr.join(" "))
//     }
// }
// let array = [42, 7, 15, 89, 3, 56, 21, 10, 67, 34];
// selectionSort(array)




let str="aabcccccaaa"
compressString(str)
function compressString(str) {
    let obj={}
    let result=""
    for (let i = 0; i < str.length; i++) {
        obj[str[i]]=(obj[str[i]]||0)+1        
    }
    for(let i in obj){
        result+=i+obj[i]
    }
    
    console.log(result);
  

}