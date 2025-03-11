// Reverse a string without using library functions.

function reverseString(str) {

    let string = "";
    for (let i = str.length - 1; i >= 0; i--) {

        string += str[i];

    }
    console.log(string);

}
reverseString("Sham");

