
arr1 = ["a", "b", "c", "d" ]
arr2 = ["Dell", "Philips", "Samsung", "AOX", "Sony"];

function mySplice (arr1, arr2, n) {
    return arr2.splice(n, 0, arr1); 
   
}
   var i = 0;
while (i < arr1.length) {
    var x = [1, 2, 3, 4, 5];
    if (arr1[i].test == x) {
       arr2.splice(i, 1)
    } else {
       ++i;
    }


console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
module.exports = mySplice.splice;
}