// Matrix Multiplication using 2D Integer array
let array2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function matrixMulti(arrayOne , arrayTwo) {

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {

            array1[i][j] = array1[i][j]*array2[i][j]

        }
    }
    console.log(arrayOne)

}
matrixMulti(array1,array2)