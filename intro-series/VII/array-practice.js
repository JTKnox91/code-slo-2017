var myArray = [1,2,3,4,5,6,7,8];
console.log(myArray);


//pop
var last = myArray.pop();
console.log(myArray)
 
//push
myArray.push(last);
console.log(myArray);

//splice
myArray.splice(myArray.length-1, 1, last);
console.log(myArray);

console.log(("a b").split());