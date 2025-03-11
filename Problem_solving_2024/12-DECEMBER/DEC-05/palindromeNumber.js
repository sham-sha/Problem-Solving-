// Palindrome Number
// A palindrome number is a number that reads the same backward as forward.

const isPalindrome = function(x) {
     return x === Number(x.toString().split("").reverse().join(""));
    //  console.log(x)
}
console.log(isPalindrome(12));


