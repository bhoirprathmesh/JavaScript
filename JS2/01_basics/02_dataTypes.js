"use strict"; 
/* treat all js code as newer version (code will use strict mode) as now we not write this line as new version is already work on strict mode.
*/

//alert(3+3) -->we are using nodejs, not browser

let name = "Pratham"
let age = 18
let isLoggedIn = false
let state; 
let city = null

// primitive datatype :
/*
number => range - 2 to power 53
bigint => when number is greater 
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique
*/

//object
console.log(typeof "pratham")
console.log(typeof undefined) //returns undefined
console.log(typeof null) //return object

// Summary :

// Primitive
// 7 types String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn1 = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // retrun false

const bigNumber = 4511485489653271854n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ 
    console.log("Hello world");
}

console.log(typeof bigNumber) // return bigint
console.log(typeof heros) // return onject
console.log(typeof myObj) // return object
console.log(typeof myFunction) // return function
console.log(typeof id) // return symbol