// Given an array of strings, return the string which has maximum 'a' character present in it.
// eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it

  function findMaxAString(arr) {
  let maxCount = 0;
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "a" || arr[i][j] === "A") {
        count++;
      }
    }

    if (maxCount < count) {
      maxCount = count;
      result = arr[i];
    }
  }

  return result;
}

console.log(findMaxAString(["apple", "appeal", "after", "banish"]));
