// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham


function findMaxLengthInArray(arr) {
    let maxString = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (maxString.length < arr[i].length) {
            maxLength = arr[i]
        }

    }
    console.log(maxLength);

}
findMaxLengthInArray(["Ram", "Abraham", "Peter"]) //Test case 1
findMaxLengthInArray(["Alice", "Bob", "Christina", "Daniel"]) //Test case 2
findMaxLengthInArray(["Sun", "Moon", "Stars", "Comet", "Meteorite"]) //Test case 3


