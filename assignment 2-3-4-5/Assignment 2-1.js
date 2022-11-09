// Assignment 1: Find index number with value
let Arr1 = [11, 15, 17, 18, 19];


var index = Arr1.indexOf(15);
console.log("index number of 15 is ", index)

var value = Arr1[3]
console.log("value of index number 3 is", value)
Arr1.splice(1, 0, 12)
Arr1.splice(2, 0, 13)
Arr1.splice(3, 0, 14)
Arr1.splice(5, 0, 16)



//Assignment 2: Prototypes methods of array and create your own methods.

Array.prototype.print = function () {
    
    for (var i = 0; i < this.length; i++) {
        console.log("index " + i + " contains value " + this[i])

    };
}
Arr1.print();





