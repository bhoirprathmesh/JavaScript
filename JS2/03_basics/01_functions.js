function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");
}

sayMyName()

function addTwoNumbers (number1, number2) {   // when we create the def of functions with (parameters)
    console.log(number1 + number2);
}

addTwoNumbers (3, "4")
addTwoNumbers (3, "a")  // value which is pass while calling the functions is called (arguments)
addTwoNumbers (3, null)

function addTwoNumbers1 (number1, number2) {   // when we create the def of functions with (parameters)
    let result = number1 + number2
    return result
    // return number1 + number2        --> same 
    console.log("Pratham");  // after returning the statement we cann't write the code
}

const result = addTwoNumbers1(3, 5)
console.log("Result: " + result);
console.log("Result: ", result);

function loginUserMessage (username) {
    if (username === undefined) {       // or !username
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Pratham"))
console.log(loginUserMessage())   // --> give output undefined

// depending upon the parameters it may be of rest operator or spread operator
function calculateCarprice(...num1){         // for now it is the rest operator
    return num1
}

console.log(calculateCarprice(200, 400, 500))

function calculateCarprice1(val1, val2, ...num1){ 
    return num1
}

console.log(calculateCarprice1(200, 400, 500, 600))

const user ={
    username : "Pratham",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username : "Nikita",
    price : 200
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

