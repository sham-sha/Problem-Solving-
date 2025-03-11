let array = [1, 89, 9, 10, 11];

function insertInArray(index, number) {

    for (let i = array.length; i > index; i--) {
        
        array[i] = array[i - 1];
    }


    array[index] = number;

    console.log(array);
}

insertInArray(2, 2);
