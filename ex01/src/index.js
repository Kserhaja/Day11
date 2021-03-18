
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
    

    myArr[2] = 6;
   return myItems;
    
}
myArrayFunction(myArr)[2];

console.log(myArrayFunction(myArr[2]));

module.exports = myArrayFunction;