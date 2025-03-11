function startWithA(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == "a" || arr[i][0] == "A") {
            arr1.push(arr[i])
        }
    }
if(arr1.length>0){
    console.log(arr1.join())
}
else{
    console.log("There is no string start with A or a")
}



}
startWithA(["apple", "Ali", "mango", "Brush"]) //Test case 1
startWithA(["Avocado", "banana", "Apricot", "orange", "aPeach"]) //Test case 2
startWithA(["grape", "apple", "peach", "Almond", "berry"]) //Test case 3
startWithA(["banana", "mango", "Brush", "cherry"]) //Test case 4