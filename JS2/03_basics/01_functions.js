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