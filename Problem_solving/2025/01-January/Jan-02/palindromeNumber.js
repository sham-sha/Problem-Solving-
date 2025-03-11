// A palindrome number is a number that reads the same backward as forward.

const palindrome =(number)=>{
    return number<0 ?  false : number=== +number.toString().split("").reverse().join("")
}
console.log(palindrome(10))