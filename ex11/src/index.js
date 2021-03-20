// Only change code below this line
function splitArrayInGroups(arr, n) {
    result=[];
    size = n;
    for (var n = 0; n = arr.length; n += size) {
        result.push(arr.slice(n, size +n));
      }
      return result;
    // Only change code above this line
}
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;