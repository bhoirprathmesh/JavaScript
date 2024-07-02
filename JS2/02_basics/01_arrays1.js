// array

const myArr = [0, 1 , 2, 3, 4, 5, "dogs"]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) 
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift (9)  //add element to the start of the array
myArr.unshift (8)  
myArr.shift()  // to remove the starting element from the array

console.log(myArr.includes(8));
console.log(myArr.indexOf(18));

console.log(myArr);

const newArr = myArr.join()
console.log(myArr);  //print the same array as it is 
console.log(newArr);  //bind the array and convert it into the string 
console.log(typeof newArr);

//slice and splice
console.log("A", myArr);
const myn1= myArr.slice(1, 3) 
console.log("C", myArr);//here the original array not get change
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1, 3) 
console.log("D", myArr);//here the original array get change
console.log(myn2);
