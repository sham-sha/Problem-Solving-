function sumOfMultiplesOf5(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 5 * i;
    }
    return total;
}

let n = 3;
let result = sumOfMultiplesOf5(n);
console.log(result);
