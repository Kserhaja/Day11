function myBouncer(arr) {
    var noviArr = [];
    for (var i = 0; i < arr.lenght; i++) {
        if (arr[i] == true) {
            noviArr.push(arr[i]);
        }
    }
    return noviArr;
}
// Only change code above this line
console.log(myBouncer([444, "", 0, false, null, 8, undefined, "", true, 0, false]))
module.exports = myBouncer;