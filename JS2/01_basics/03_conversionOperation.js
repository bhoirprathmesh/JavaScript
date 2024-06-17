let score = "33"

console.log(typeof score)
console.log(typeof(score)) //both are same

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

//Now
let score1 = "33abc"
console.log(typeof score1)

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) // --> give output NaN(Not a Number)

//also
let score2 = null
console.log(typeof score2)

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2) // --> give output 0

//also
let score3 = undefined
console.log(typeof score3)

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3) // --> give output NaN(Not a Number)

//also
let score4 = true
console.log(typeof score4)

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4) // --> give output 1 as for false 0

//also
let score5 = "Pratham"
console.log(typeof score5)

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5) // --> give output NaN(Not a Number)

let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //--> give output 1

/*
1 => true
0 => false
"" => false
"Pratham" => true
*/

// also
let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

