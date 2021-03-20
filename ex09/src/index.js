// Only change code below this line
function myBouncer(arr) {
    let onlyTruthyValues = arr.filter(element => Boolean(element) === true)
    return onlyTruthyValues;
  }
// Only change code above this line     
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c",]));
console.log(myBouncer([false, null, 0 , NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1 , 2, undefined]));
module.exports = myBouncer;