// Count Total Number of Colored Cells

/*
There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:

At the first minute, color any arbitrary unit cell blue.
Every minute thereafter, color blue every uncolored cell that touches a blue cell.
Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.

*/

var coloredCells = function(n) {
    if (n == 1) return 1;
    let sum = 1;
    let result = 4;
    for(let i = 1;i<n;i++){
        sum+=result
        result+=4
    }
    return sum;
};