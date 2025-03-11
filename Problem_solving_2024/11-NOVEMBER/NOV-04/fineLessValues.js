// 2. Given an array find all the values less than 15 in a new array if not print No Element less than 15.
// Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15

function findLessThan15(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      result.push(arr[i]);
    }
  }
  if (result.length > 0) {
    return result.join(",");
  } else {
    return "No element less than 15";
  }
}
console.log(findLessThan15([4, 15, 8, 25, 30, 22, 10, 12], 15));
console.log(findLessThan15([19, 89, 90, 18]));
