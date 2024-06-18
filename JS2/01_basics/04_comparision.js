// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);    //here string is automatically coverted into number.
console.log("02" > 1);   // same here 

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

/*
Note :
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/ 

// ===
console.log("2" === 2)  //false (as there is three equal sign it will check both datatypes)