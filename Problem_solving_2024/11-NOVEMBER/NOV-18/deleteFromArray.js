let array = [1, 89, 9, 10, 11];

function deleteFromArray(index) {
    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    array.length = array.length - 1;

    console.log(array);
}

deleteFromArray(2);
