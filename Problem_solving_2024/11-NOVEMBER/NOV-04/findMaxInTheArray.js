//Find the index of the first maximum in the array. for eg arr = [4, 1, 2, 5, 3] index is 1.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return arr.indexOf(max);
}
console.log(findMax([4, 1, 2, 5, 3]));
