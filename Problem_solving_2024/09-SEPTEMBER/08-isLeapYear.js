function isLeapYear(a) {
    // Enter your code here
    // the variable a should be check if its leap year or not
 if (a/4==0){
        console.log("Y")
    }
else if(a%400==0){
    console.log("Y")
}
else if (a%100!=0){
    console.log("Y")
}
    else {
        console.log("N")
    }
}

isLeapYear(2000)
isLeapYear(1900)
isLeapYear(2020)