 // Create an Array here
 var myArr = [2, 4, 0, 8, 10];
 myArr[0];
 myArr[1];
 myArr[2];
 myArr[3];
 myArr[4];
 // End of creating an array

 function myArrayFunction(myItems) {
 var myItems = [...myArr]
 // Only change code below this line

 myItems[2] = 6;
return myItems;
 // Only change code above this line
}
myArrayFunction(myArr)[2];

console.log(myArrayFunction(myArr[2]));

module.exports = myArrayFunction;