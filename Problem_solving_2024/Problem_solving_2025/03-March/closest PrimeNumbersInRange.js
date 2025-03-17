/*
Given two positive integers left and right, find the two integers num1 and num2 such that:

left <= num1 < num2 <= right .
Both num1 and num2 are prime numbers.
num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

*/

var closestPrimes = function(left, right) {
    let arr = []
    for(let i = left ; i<=right ; i++){
        for(j=2;j<i;j++){
            if(i%j==1) arr.push(i)
            break;
        }
    }
    let min =0
    for(let k = arr.length-1;k>=0;k--){
        if(arr[k]-arr[k-1]){

        }
    }

};

result = closestPrimes(10,19)

console.log(result);


